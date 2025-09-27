import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useSocket } from '../context/SocketContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const MessagingSystem = () => {
    const { userData, backendUrl, token } = useContext(AppContext);
    const { sendMessage, isConnected, newMessages, typingUsers, startTyping, stopTyping } = useSocket();
    
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sendingMessage, setSendingMessage] = useState(false);
    const [newMessage, setNewMessage] = useState({
        receiverId: '',
        receiverType: 'admin',
        subject: '',
        message: ''
    });
    const [selectedMessage, setSelectedMessage] = useState(null);
    const [isTyping, setIsTyping] = useState(false);
    const [typingTimeout, setTypingTimeout] = useState(null);

    useEffect(() => {
        loadMessages();
    }, []);

    // Handle real-time messages
    useEffect(() => {
        if (newMessages.length > 0) {
            const latestMessage = newMessages[newMessages.length - 1];
            setMessages(prev => [latestMessage, ...prev]);
        }
    }, [newMessages]);

    const loadMessages = async () => {
        try {
            setLoading(true);
            const response = await axios.post(`${backendUrl}/api/messages/get`, {
                userId: userData._id,
                userType: 'patient'
            }, {
                headers: { token }
            });

            if (response.data.success) {
                setMessages(response.data.messages);
            }
        } catch (error) {
            console.log('Load messages error:', error);
            toast.error('Failed to load messages');
        } finally {
            setLoading(false);
        }
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();
        
        if (!newMessage.subject || !newMessage.message) {
            toast.error('Please fill in all fields');
            return;
        }

        try {
            setSendingMessage(true);
            
            // Send message via API first
            const response = await axios.post(`${backendUrl}/api/messages/send`, {
                senderId: userData._id,
                senderType: 'patient',
                ...newMessage
            }, {
                headers: { token }
            });

            if (response.data.success) {
                // Send via socket for real-time delivery
                sendMessage({
                    ...response.data.data,
                    senderName: userData.name,
                    receiverName: newMessage.receiverType === 'admin' ? 'Admin Team' : 'Doctor'
                });
                
                toast.success('Message sent successfully!');
                setNewMessage({
                    receiverId: '',
                    receiverType: 'admin',
                    subject: '',
                    message: ''
                });
                loadMessages();
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log('Send message error:', error);
            toast.error('Failed to send message');
        } finally {
            setSendingMessage(false);
        }
    };

    const handleTyping = (e) => {
        setNewMessage(prev => ({ ...prev, message: e.target.value }));
        
        if (!isTyping) {
            setIsTyping(true);
            startTyping(newMessage.receiverId || 'admin', 'patient');
        }

        // Clear existing timeout
        if (typingTimeout) {
            clearTimeout(typingTimeout);
        }

        // Set new timeout
        const timeout = setTimeout(() => {
            setIsTyping(false);
            stopTyping(newMessage.receiverId || 'admin', 'patient');
        }, 1000);

        setTypingTimeout(timeout);
    };

    const markAsRead = async (messageId) => {
        try {
            await axios.post(`${backendUrl}/api/messages/mark-read`, {
                messageId
            }, {
                headers: { token }
            });
            loadMessages();
        } catch (error) {
            console.log('Mark as read error:', error);
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading messages...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">Messages</h1>
                                <p className="text-gray-600">Communicate with our team and specialists</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                {/* Connection Status */}
                                <div className="flex items-center space-x-2">
                                    <div className={`w-3 h-3 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                    <span className="text-sm text-gray-600">
                                        {isConnected ? 'Connected' : 'Disconnected'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Messages List */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-lg shadow-sm">
                                <div className="p-6 border-b border-gray-200">
                                    <h2 className="text-lg font-semibold text-gray-900">Your Messages</h2>
                                </div>
                                <div className="max-h-96 overflow-y-auto">
                                    {messages.length > 0 ? (
                                        messages.map((message, index) => (
                                            <div
                                                key={index}
                                                className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                                                    !message.isRead ? 'bg-blue-50' : ''
                                                }`}
                                                onClick={() => {
                                                    setSelectedMessage(message);
                                                    if (!message.isRead) {
                                                        markAsRead(message._id);
                                                    }
                                                }}
                                            >
                                                <div className="flex justify-between items-start">
                                                    <div className="flex-1">
                                                        <div className="flex items-center space-x-2">
                                                            <h3 className="font-medium text-gray-900">{message.subject}</h3>
                                                            {!message.isRead && (
                                                                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                                            )}
                                                        </div>
                                                        <p className="text-sm text-gray-600 mt-1">
                                                            {message.senderType === 'patient' ? 'You' : message.senderName} → {message.receiverType === 'patient' ? 'You' : message.receiverName}
                                                        </p>
                                                        <p className="text-sm text-gray-500 mt-1">
                                                            {message.message.substring(0, 100)}...
                                                        </p>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="text-xs text-gray-500">
                                                            {formatDate(message.createdAt)}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="p-8 text-center">
                                            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                            </svg>
                                            <h3 className="text-lg font-medium text-gray-900 mb-2">No messages yet</h3>
                                            <p className="text-gray-600">Start a conversation with our team</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Message Details and Compose */}
                        <div className="space-y-6">
                            {/* Selected Message Details */}
                            {selectedMessage && (
                                <div className="bg-white rounded-lg shadow-sm p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-lg font-semibold text-gray-900">{selectedMessage.subject}</h3>
                                        <button
                                            onClick={() => setSelectedMessage(null)}
                                            className="text-gray-400 hover:text-gray-600"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="mb-4">
                                        <p className="text-sm text-gray-600">
                                            From: {selectedMessage.senderName} ({selectedMessage.senderType})
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            To: {selectedMessage.receiverName} ({selectedMessage.receiverType})
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {formatDate(selectedMessage.createdAt)}
                                        </p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <p className="text-gray-900 whitespace-pre-wrap">{selectedMessage.message}</p>
                                    </div>
                                </div>
                            )}

                            {/* Compose New Message */}
                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Send Message</h3>
                                <form onSubmit={handleSendMessage} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            To
                                        </label>
                                        <select
                                            value={newMessage.receiverType}
                                            onChange={(e) => setNewMessage(prev => ({ ...prev, receiverType: e.target.value }))}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        >
                                            <option value="admin">Admin Team</option>
                                            <option value="doctor">Doctor</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            value={newMessage.subject}
                                            onChange={(e) => setNewMessage(prev => ({ ...prev, subject: e.target.value }))}
                                            placeholder="Enter message subject"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            value={newMessage.message}
                                            onChange={handleTyping}
                                            placeholder="Type your message here..."
                                            rows={4}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            required
                                        />
                                        {/* Typing Indicators */}
                                        {typingUsers.length > 0 && (
                                            <div className="text-sm text-gray-500 mt-2">
                                                {typingUsers.map((user, index) => (
                                                    <span key={index}>
                                                        {user.senderType === 'admin' ? 'Admin' : 'Doctor'} is typing...
                                                        {index < typingUsers.length - 1 && ', '}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={sendingMessage}
                                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {sendingMessage ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessagingSystem;
