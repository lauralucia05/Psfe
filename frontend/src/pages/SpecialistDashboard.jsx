import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const SpecialistDashboard = () => {
    const { userData, backendUrl, token } = useContext(AppContext);
    const navigate = useNavigate();
    
    const [activeTab, setActiveTab] = useState('overview');
    const [dashboardData, setDashboardData] = useState({
        earnings: 0,
        appointments: 0,
        patients: 0,
        upcomingAppointments: []
    });
    const [patients, setPatients] = useState([]);
    const [earnings, setEarnings] = useState([]);
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
            
            // Load dashboard data
            const dashboardResponse = await axios.post(`${backendUrl}/api/doctor/dashboard`, {
                docId: userData._id
            }, {
                headers: { token }
            });

            if (dashboardResponse.data.success) {
                setDashboardData(dashboardResponse.data.dashData);
            }

            // Load earnings data
            const earningsResponse = await axios.post(`${backendUrl}/api/payments/doctor-earnings`, {
                doctorId: userData._id
            }, {
                headers: { token }
            });

            if (earningsResponse.data.success) {
                setEarnings(earningsResponse.data.earnings);
            }

            // Load patients (unique patients from appointments)
            const appointmentsResponse = await axios.post(`${backendUrl}/api/doctor/appointments`, {
                docId: userData._id
            }, {
                headers: { token }
            });

            if (appointmentsResponse.data.success) {
                const uniquePatients = [];
                const patientMap = new Map();
                
                appointmentsResponse.data.appointments.forEach(appointment => {
                    if (!patientMap.has(appointment.userId)) {
                        patientMap.set(appointment.userId, appointment.userData);
                        uniquePatients.push({
                            ...appointment.userData,
                            lastAppointment: appointment.slotDate,
                            totalAppointments: appointmentsResponse.data.appointments.filter(
                                apt => apt.userId === appointment.userId
                            ).length
                        });
                    }
                });
                
                setPatients(uniquePatients);
            }

        } catch (error) {
            console.log('Dashboard data loading error:', error);
            toast.error('Failed to load dashboard data');
        } finally {
            setLoading(false);
        }
    };

    const handleViewPatient = (patientId) => {
        navigate(`/patient-details/${patientId}`);
    };

    const handleUpdateProfile = () => {
        navigate('/specialist-profile-edit');
    };

    const handleManageSchedule = () => {
        navigate('/schedule-management');
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
                                Welcome back, Dr. {userData?.name}!
                            </h1>
                            <p className="text-gray-600">
                                Here's your practice overview
                            </p>
                        </div>
                        <div className="flex space-x-4">
                            <button
                                onClick={handleUpdateProfile}
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Update Profile
                            </button>
                            <button
                                onClick={handleManageSchedule}
                                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                            >
                                Manage Schedule
                            </button>
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <div className="flex items-center">
                            <div className="bg-green-100 p-3 rounded-lg">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Total Earnings</p>
                                <p className="text-2xl font-bold text-gray-900">${dashboardData.earnings}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <div className="flex items-center">
                            <div className="bg-blue-100 p-3 rounded-lg">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Total Appointments</p>
                                <p className="text-2xl font-bold text-gray-900">{dashboardData.appointments}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <div className="flex items-center">
                            <div className="bg-purple-100 p-3 rounded-lg">
                                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Total Patients</p>
                                <p className="text-2xl font-bold text-gray-900">{dashboardData.patients}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <div className="flex items-center">
                            <div className="bg-orange-100 p-3 rounded-lg">
                                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Rating</p>
                                <p className="text-2xl font-bold text-gray-900">{userData?.rating || 4.5}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content Tabs */}
                <div className="bg-white rounded-lg shadow-sm">
                    <div className="border-b border-gray-200">
                        <nav className="flex space-x-8 px-6">
                            {[
                                { id: 'overview', label: 'Overview' },
                                { id: 'patients', label: 'Patients' },
                                { id: 'earnings', label: 'Earnings' },
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
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Appointments</h3>
                                        {dashboardData.upcomingAppointments.length > 0 ? (
                                            <div className="space-y-3">
                                                {dashboardData.upcomingAppointments.slice(0, 5).map((appointment, index) => (
                                                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                                                        <div className="flex justify-between items-start">
                                                            <div>
                                                                <p className="font-medium text-gray-900">{appointment.userData.name}</p>
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
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Earnings</h3>
                                        {earnings.slice(0, 5).map((earning, index) => (
                                            <div key={index} className="bg-gray-50 p-4 rounded-lg mb-3">
                                                <div className="flex justify-between items-center">
                                                    <div>
                                                        <p className="font-medium text-gray-900">{earning.patientName}</p>
                                                        <p className="text-sm text-gray-600">{earning.slotDate}</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="font-semibold text-green-600">${earning.doctorEarnings}</p>
                                                        <p className="text-xs text-gray-500">Platform fee: ${earning.platformFee}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Patients Tab */}
                        {activeTab === 'patients' && (
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-6">Your Patients</h3>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Appointment</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Appointments</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {patients.map((patient, index) => (
                                                <tr key={index}>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <img className="h-10 w-10 rounded-full" src={patient.image} alt="" />
                                                            <div className="ml-4">
                                                                <div className="text-sm font-medium text-gray-900">{patient.name}</div>
                                                                <div className="text-sm text-gray-500">{patient.email}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                        {patient.lastAppointment}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                        {patient.totalAppointments}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                        <button
                                                            onClick={() => handleViewPatient(patient._id)}
                                                            className="text-blue-600 hover:text-blue-900"
                                                        >
                                                            View Details
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {/* Earnings Tab */}
                        {activeTab === 'earnings' && (
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-6">Earnings History</h3>
                                <div className="space-y-4">
                                    {earnings.map((earning, index) => (
                                        <div key={index} className="bg-gray-50 rounded-lg p-6">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h4 className="font-semibold text-gray-900">{earning.patientName}</h4>
                                                    <p className="text-sm text-gray-600">{earning.slotDate} at {earning.slotTime}</p>
                                                    <p className="text-sm text-gray-500">Appointment ID: {earning.appointmentId}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-lg font-semibold text-green-600">${earning.doctorEarnings}</p>
                                                    <p className="text-sm text-gray-500">Platform fee: ${earning.platformFee}</p>
                                                    <p className="text-sm text-gray-500">Total: ${earning.amount}</p>
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
                                <h3 className="text-lg font-semibold text-gray-900 mb-6">All Appointments</h3>
                                <div className="space-y-4">
                                    {dashboardData.upcomingAppointments.map((appointment, index) => (
                                        <div key={index} className="bg-gray-50 rounded-lg p-6">
                                            <div className="flex justify-between items-start mb-4">
                                                <div>
                                                    <h4 className="font-semibold text-gray-900">{appointment.userData.name}</h4>
                                                    <p className="text-sm text-gray-600">{appointment.userData.email}</p>
                                                </div>
                                                <span className={`px-3 py-1 text-sm rounded-full ${
                                                    appointment.status === 'scheduled' ? 'bg-yellow-100 text-yellow-800' :
                                                    appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                                                    appointment.status === 'completed' ? 'bg-blue-100 text-blue-800' :
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
                                            {appointment.patientNotes && (
                                                <div className="mb-4">
                                                    <p className="text-sm text-gray-600">Patient Notes</p>
                                                    <p className="text-sm text-gray-900">{appointment.patientNotes}</p>
                                                </div>
                                            )}
                                            <div className="flex items-center justify-between">
                                                <span className="text-lg font-semibold text-gray-900">${appointment.amount}</span>
                                                <div className="space-x-2">
                                                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                                        View Details
                                                    </button>
                                                    {appointment.status === 'scheduled' && (
                                                        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                                                            Mark Complete
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialistDashboard;

