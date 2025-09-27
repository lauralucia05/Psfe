import React, { createContext, useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { AppContext } from './AppContext';

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
    const { backendUrl, token, userData } = useContext(AppContext);
    const [socket, setSocket] = useState(null);
    const [isConnected, setIsConnected] = useState(false);
    const [newMessages, setNewMessages] = useState([]);
    const [typingUsers, setTypingUsers] = useState([]);

    useEffect(() => {
        if (token && userData) {
            // Initialize socket connection
            const newSocket = io(backendUrl, {
                auth: {
                    token: token,
                    userId: userData._id
                }
            });

            newSocket.on('connect', () => {
                console.log('Connected to server');
                setIsConnected(true);
                
                // Join user's personal room
                newSocket.emit('join-user-room', userData._id);
            });

            newSocket.on('disconnect', () => {
                console.log('Disconnected from server');
                setIsConnected(false);
            });

            // Handle new messages
            newSocket.on('new-message', (messageData) => {
                setNewMessages(prev => [...prev, messageData]);
            });

            // Handle message sent confirmation
            newSocket.on('message-sent', (messageData) => {
                console.log('Message sent successfully:', messageData);
            });

            // Handle typing indicators
            newSocket.on('user-typing', (data) => {
                setTypingUsers(prev => {
                    const exists = prev.find(user => 
                        user.senderId === data.senderId && user.senderType === data.senderType
                    );
                    if (!exists) {
                        return [...prev, data];
                    }
                    return prev;
                });
            });

            newSocket.on('user-stopped-typing', (data) => {
                setTypingUsers(prev => 
                    prev.filter(user => 
                        !(user.senderId === data.senderId && user.senderType === data.senderType)
                    )
                );
            });

            // Handle message errors
            newSocket.on('message-error', (error) => {
                console.error('Socket message error:', error);
            });

            setSocket(newSocket);

            return () => {
                newSocket.close();
            };
        }
    }, [token, userData, backendUrl]);

    const sendMessage = (messageData) => {
        if (socket && isConnected) {
            socket.emit('send-message', messageData);
        }
    };

    const startTyping = (receiverId, senderType) => {
        if (socket && isConnected) {
            socket.emit('typing-start', {
                receiverId,
                senderId: userData._id,
                senderType
            });
        }
    };

    const stopTyping = (receiverId, senderType) => {
        if (socket && isConnected) {
            socket.emit('typing-stop', {
                receiverId,
                senderId: userData._id,
                senderType
            });
        }
    };

    const clearNewMessages = () => {
        setNewMessages([]);
    };

    const value = {
        socket,
        isConnected,
        newMessages,
        typingUsers,
        sendMessage,
        startTyping,
        stopTyping,
        clearNewMessages
    };

    return (
        <SocketContext.Provider value={value}>
            {children}
        </SocketContext.Provider>
    );
};

export const useSocket = () => {
    const context = useContext(SocketContext);
    if (!context) {
        throw new Error('useSocket must be used within a SocketProvider');
    }
    return context;
};

export default SocketContext;

