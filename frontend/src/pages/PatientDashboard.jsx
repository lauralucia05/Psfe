import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const PatientDashboard = () => {
    const { userData, backendUrl, token } = React.useContext(AppContext);
    const navigate = useNavigate();
    
    const [activeTab, setActiveTab] = useState('overview');
    const [educationalContent, setEducationalContent] = useState([]);
    const [specialists, setSpecialists] = useState([]);
    const [upcomingAppointments, setUpcomingAppointments] = useState([]);
    const [unreadMessages, setUnreadMessages] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!token) {
            navigate('/login');
            return;
        }
        loadDashboardData();
    }, [token]);

    const loadDashboardData = async () => {
        try {
            setLoading(true);
            
            // Load educational content
            const contentResponse = await axios.get(`${backendUrl}/api/educational-content/featured`);
            if (contentResponse.data.success) {
                setEducationalContent(contentResponse.data.content);
            }

            // Load specialists
            const specialistsResponse = await axios.get(`${backendUrl}/api/doctor/list`);
            if (specialistsResponse.data.success) {
                setSpecialists(specialistsResponse.data.doctors);
            }

            // Load upcoming appointments
            const appointmentsResponse = await axios.get(`${backendUrl}/api/user/list-appointment`, {
                headers: { token }
            });
            if (appointmentsResponse.data.success) {
                setUpcomingAppointments(appointmentsResponse.data.appointments.slice(0, 3));
            }

            // Load unread messages count
            const messagesResponse = await axios.post(`${backendUrl}/api/messages/unread-count`, {
                userId: userData?._id,
                userType: 'patient'
            }, { headers: { token } });
            if (messagesResponse.data.success) {
                setUnreadMessages(messagesResponse.data.unreadCount);
            }

        } catch (error) {
            console.log('Dashboard data loading error:', error);
            toast.error('Failed to load dashboard data');
        } finally {
            setLoading(false);
        }
    };

    const handleBookAppointment = (doctorId) => {
        navigate(`/appointment?doctorId=${doctorId}`);
    };

    const handleRequestReferral = () => {
        navigate('/referral-form');
    };

    const handleRequestSecondOpinion = () => {
        navigate('/second-opinion');
    };

    const handleViewMessages = () => {
        navigate('/messages');
    };

    const handleViewAllAppointments = () => {
        navigate('/my-appointments');
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading your dashboard...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            <div className="container mx-auto px-4 py-8">
                {/* Welcome Header */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                Welcome back, {userData?.name}!
                            </h1>
                            <p className="text-gray-600">
                                Here's your mental health journey overview
                            </p>
                        </div>
                        <div className="flex space-x-4">
                            <button
                                onClick={handleViewMessages}
                                className="relative bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Messages
                                {unreadMessages > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                        {unreadMessages}
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <div className="flex items-center mb-4">
                            <div className="bg-green-100 p-3 rounded-lg">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 ml-3">Book Appointment</h3>
                        </div>
                        <p className="text-gray-600 mb-4">Schedule a consultation with our specialists</p>
                        <button
                            onClick={() => navigate('/doctors')}
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Find Specialists
                        </button>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <div className="flex items-center mb-4">
                            <div className="bg-purple-100 p-3 rounded-lg">
                                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 ml-3">Request Referral</h3>
                        </div>
                        <p className="text-gray-600 mb-4">Submit referral form for first-time booking</p>
                        <button
                            onClick={handleRequestReferral}
                            className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
                        >
                            Submit Referral
                        </button>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <div className="flex items-center mb-4">
                            <div className="bg-orange-100 p-3 rounded-lg">
                                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 ml-3">Second Opinion</h3>
                        </div>
                        <p className="text-gray-600 mb-4">Get a second opinion from our experts</p>
                        <button
                            onClick={handleRequestSecondOpinion}
                            className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors"
                        >
                            Request Opinion
                        </button>
                    </div>
                </div>

                {/* Main Content Tabs */}
                <div className="bg-white rounded-lg shadow-sm">
                    <div className="border-b border-gray-200">
                        <nav className="flex space-x-8 px-6">
                            {[
                                { id: 'overview', label: 'Overview' },
                                { id: 'education', label: 'Educational Content' },
                                { id: 'specialists', label: 'Specialists' },
                                { id: 'appointments', label: 'Appointments' }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                                        activeTab === tab.id
                                            ? 'border-blue-500 text-blue-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </nav>
                    </div>

                    <div className="p-6">
                        {/* Overview Tab */}
                        {activeTab === 'overview' && (
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Appointments</h3>
                                        {upcomingAppointments.length > 0 ? (
                                            <div className="space-y-3">
                                                {upcomingAppointments.map((appointment, index) => (
                                                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                                                        <div className="flex justify-between items-start">
                                                            <div>
                                                                <p className="font-medium text-gray-900">{appointment.docData.name}</p>
                                                                <p className="text-sm text-gray-600">{appointment.slotDate} at {appointment.slotTime}</p>
                                                                <p className="text-sm text-blue-600">{appointment.consultationType || 'In-person'}</p>
                                                            </div>
                                                            <span className={`px-2 py-1 text-xs rounded-full ${
                                                                appointment.status === 'scheduled' ? 'bg-yellow-100 text-yellow-800' :
                                                                appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                                                                'bg-gray-100 text-gray-800'
                                                            }`}>
                                                                {appointment.status || 'Scheduled'}
                                                            </span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <p className="text-gray-500">No upcoming appointments</p>
                                        )}
                                        <button
                                            onClick={handleViewAllAppointments}
                                            className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
                                        >
                                            View All Appointments →
                                        </button>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Educational Content</h3>
                                        {educationalContent.slice(0, 3).map((content, index) => (
                                            <div key={index} className="bg-gray-50 p-4 rounded-lg mb-3">
                                                <h4 className="font-medium text-gray-900 mb-2">{content.title}</h4>
                                                <p className="text-sm text-gray-600 mb-2">{content.content.substring(0, 100)}...</p>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">
                                                        {content.category.replace('_', ' ')}
                                                    </span>
                                                    <span className="text-xs text-gray-500">{content.readTime} min read</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Educational Content Tab */}
                        {activeTab === 'education' && (
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-6">Educational Content</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {educationalContent.map((content, index) => (
                                        <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                                            <div className="mb-4">
                                                <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">
                                                    {content.category.replace('_', ' ')}
                                                </span>
                                                <span className="text-xs text-gray-500 ml-2">{content.type}</span>
                                            </div>
                                            <h4 className="font-semibold text-gray-900 mb-2">{content.title}</h4>
                                            <p className="text-sm text-gray-600 mb-4">{content.content.substring(0, 150)}...</p>
                                            <div className="flex items-center justify-between">
                                                <span className="text-xs text-gray-500">{content.readTime} min read</span>
                                                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                                                    Read More →
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Specialists Tab */}
                        {activeTab === 'specialists' && (
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-6">Available Specialists</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {specialists.map((specialist, index) => (
                                        <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                                            <div className="flex items-center mb-4">
                                                <img
                                                    src={specialist.image}
                                                    alt={specialist.name}
                                                    className="w-16 h-16 rounded-full object-cover"
                                                />
                                                <div className="ml-4">
                                                    <h4 className="font-semibold text-gray-900">{specialist.name}</h4>
                                                    <p className="text-sm text-gray-600">{specialist.speciality}</p>
                                                    <div className="flex items-center mt-1">
                                                        <span className="text-yellow-500">★</span>
                                                        <span className="text-sm text-gray-600 ml-1">
                                                            {specialist.rating || 4.5} ({specialist.totalReviews || 0} reviews)
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-sm text-gray-600 mb-4">{specialist.about.substring(0, 100)}...</p>
                                            <div className="flex items-center justify-between">
                                                <span className="text-lg font-semibold text-gray-900">${specialist.fees}</span>
                                                <div className="flex space-x-2">
                                                    <button
                                                        onClick={() => navigate(`/specialist/${specialist._id}`)}
                                                        className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                                                    >
                                                        View Profile
                                                    </button>
                                                    <button
                                                        onClick={() => handleBookAppointment(specialist._id)}
                                                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                                                    >
                                                        Book Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Appointments Tab */}
                        {activeTab === 'appointments' && (
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-6">Your Appointments</h3>
                                {upcomingAppointments.length > 0 ? (
                                    <div className="space-y-4">
                                        {upcomingAppointments.map((appointment, index) => (
                                            <div key={index} className="bg-gray-50 rounded-lg p-6">
                                                <div className="flex justify-between items-start mb-4">
                                                    <div>
                                                        <h4 className="font-semibold text-gray-900">{appointment.docData.name}</h4>
                                                        <p className="text-sm text-gray-600">{appointment.docData.speciality}</p>
                                                    </div>
                                                    <span className={`px-3 py-1 text-sm rounded-full ${
                                                        appointment.status === 'scheduled' ? 'bg-yellow-100 text-yellow-800' :
                                                        appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                                                        'bg-gray-100 text-gray-800'
                                                    }`}>
                                                        {appointment.status || 'Scheduled'}
                                                    </span>
                                                </div>
                                                <div className="grid grid-cols-2 gap-4 mb-4">
                                                    <div>
                                                        <p className="text-sm text-gray-600">Date & Time</p>
                                                        <p className="font-medium">{appointment.slotDate} at {appointment.slotTime}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm text-gray-600">Type</p>
                                                        <p className="font-medium">{appointment.consultationType || 'In-person'}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-lg font-semibold text-gray-900">${appointment.amount}</span>
                                                    <div className="space-x-2">
                                                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                                            View Details
                                                        </button>
                                                        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                                                            Reschedule
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-12">
                                        <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <h4 className="text-lg font-medium text-gray-900 mb-2">No appointments yet</h4>
                                        <p className="text-gray-600 mb-4">Book your first appointment to get started</p>
                                        <button
                                            onClick={() => navigate('/doctors')}
                                            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                                        >
                                            Find Specialists
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientDashboard;
