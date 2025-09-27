import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import CalendarComponent from '../components/CalendarComponent';
import PaymentComponent from '../components/PaymentComponent';
import { toast } from 'react-toastify';
import axios from 'axios';

const SpecialistProfile = () => {
    const { doctorId } = useParams();
    const navigate = useNavigate();
    const { backendUrl, token, userData } = useContext(AppContext);
    
    const [doctor, setDoctor] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [consultationType, setConsultationType] = useState('in_person');
    const [showBookingForm, setShowBookingForm] = useState(false);
    const [showPaymentForm, setShowPaymentForm] = useState(false);
    const [bookingData, setBookingData] = useState({
        patientNotes: '',
        urgency: 'medium'
    });
    const [appointmentId, setAppointmentId] = useState(null);

    useEffect(() => {
        loadDoctorProfile();
    }, [doctorId]);

    const loadDoctorProfile = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${backendUrl}/api/doctor/list`);
            
            if (response.data.success) {
                const foundDoctor = response.data.doctors.find(doc => doc._id === doctorId);
                if (foundDoctor) {
                    setDoctor(foundDoctor);
                } else {
                    toast.error('Doctor not found');
                    navigate('/doctors');
                }
            }
        } catch (error) {
            console.log('Error loading doctor profile:', error);
            toast.error('Failed to load doctor profile');
        } finally {
            setLoading(false);
        }
    };

    const handleSlotSelect = (date, time) => {
        setSelectedDate(date);
        setSelectedTime(time);
        if (date && time) {
            setShowBookingForm(true);
        }
    };

    const handleBookingSubmit = async (e) => {
        e.preventDefault();
        
        if (!token) {
            toast.error('Please login to book an appointment');
            navigate('/login');
            return;
        }

        if (!selectedDate || !selectedTime) {
            toast.error('Please select a date and time');
            return;
        }

        try {
            const response = await axios.post(`${backendUrl}/api/user/book-appointment`, {
                userId: userData._id,
                docId: doctorId,
                slotDate: selectedDate,
                slotTime: selectedTime,
                consultationType,
                patientNotes: bookingData.patientNotes,
                urgency: bookingData.urgency
            }, {
                headers: { token }
            });

            if (response.data.success) {
                setAppointmentId(response.data.appointmentId);
                setShowBookingForm(false);
                setShowPaymentForm(true);
                toast.success('Appointment created! Please complete payment.');
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log('Booking error:', error);
            toast.error('Failed to book appointment');
        }
    };

    const handlePaymentSuccess = () => {
        setShowPaymentForm(false);
        toast.success('Payment successful! Appointment confirmed.');
        navigate('/my-appointments');
    };

    const handlePaymentCancel = () => {
        setShowPaymentForm(false);
        setShowBookingForm(true);
        toast.info('Payment cancelled. You can complete it later.');
    };

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
            );
        }

        if (hasHalfStar) {
            stars.push(
                <svg key="half" className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <defs>
                        <linearGradient id="half-fill">
                            <stop offset="50%" stopColor="currentColor"/>
                            <stop offset="50%" stopColor="transparent"/>
                        </linearGradient>
                    </defs>
                    <path fill="url(#half-fill)" d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
            );
        }

        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars.push(
                <svg key={`empty-${i}`} className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
            );
        }

        return stars;
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading specialist profile...</p>
                </div>
            </div>
        );
    }

    if (!doctor) {
        return (
            <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Doctor not found</h1>
                    <button
                        onClick={() => navigate('/doctors')}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Back to Doctors
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
                        <div className="flex flex-col lg:flex-row gap-8">
                            {/* Doctor Image and Basic Info */}
                            <div className="lg:w-1/3">
                                <div className="text-center">
                                    <img
                                        src={doctor.image}
                                        alt={doctor.name}
                                        className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                                    />
                                    <h1 className="text-2xl font-bold text-gray-900 mb-2">{doctor.name}</h1>
                                    <p className="text-lg text-blue-600 mb-4">{doctor.speciality}</p>
                                    
                                    {/* Rating */}
                                    <div className="flex items-center justify-center space-x-2 mb-4">
                                        <div className="flex">
                                            {renderStars(doctor.rating || 4.5)}
                                        </div>
                                        <span className="text-sm text-gray-600">
                                            {doctor.rating || 4.5} ({doctor.totalReviews || 0} reviews)
                                        </span>
                                    </div>

                                    {/* Verification Badge */}
                                    {doctor.isVerified && (
                                        <div className="flex items-center justify-center space-x-1 mb-4">
                                            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                            </svg>
                                            <span className="text-sm text-green-600 font-medium">Verified</span>
                                        </div>
                                    )}

                                    {/* Consultation Types */}
                                    <div className="space-y-2 mb-6">
                                        <h3 className="text-sm font-medium text-gray-900">Available Consultations</h3>
                                        <div className="space-y-1">
                                            <div className="flex items-center justify-between text-sm">
                                                <span>In-Person</span>
                                                <span className="font-medium">${doctor.fees}</span>
                                            </div>
                                            <div className="flex items-center justify-between text-sm">
                                                <span>Telehealth</span>
                                                <span className="font-medium">${doctor.fees}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Doctor Details */}
                            <div className="lg:w-2/3">
                                {/* About */}
                                <div className="mb-6">
                                    <h2 className="text-xl font-semibold text-gray-900 mb-4">About</h2>
                                    <p className="text-gray-700 leading-relaxed">{doctor.about}</p>
                                </div>

                                {/* Credentials */}
                                <div className="mb-6">
                                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Credentials</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-gray-900 mb-2">Education</h3>
                                            <p className="text-sm text-gray-600">{doctor.degree}</p>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-gray-900 mb-2">Experience</h3>
                                            <p className="text-sm text-gray-600">{doctor.experience}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Languages */}
                                {doctor.languages && doctor.languages.length > 0 && (
                                    <div className="mb-6">
                                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Languages</h2>
                                        <div className="flex flex-wrap gap-2">
                                            {doctor.languages.map((language, index) => (
                                                <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                                    {language}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Introduction Video */}
                                {doctor.introductionVideo && (
                                    <div className="mb-6">
                                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Introduction Video</h2>
                                        <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                                            <button className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition-colors">
                                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M8 5v10l8-5-8-5z"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Calendar and Booking */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Calendar */}
                        <CalendarComponent
                            doctorId={doctorId}
                            onSlotSelect={handleSlotSelect}
                            selectedDate={selectedDate}
                            selectedTime={selectedTime}
                        />

                        {/* Booking Form */}
                        {showBookingForm && (
                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Book Appointment</h3>
                                <form onSubmit={handleBookingSubmit} className="space-y-4">
                                    {/* Selected Date and Time */}
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="text-sm text-gray-600">Selected Date</p>
                                                <p className="font-medium">{new Date(selectedDate).toLocaleDateString()}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-600">Selected Time</p>
                                                <p className="font-medium">{selectedTime}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Consultation Type */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Consultation Type
                                        </label>
                                        <div className="grid grid-cols-2 gap-4">
                                            <label className="flex items-center">
                                                <input
                                                    type="radio"
                                                    value="in_person"
                                                    checked={consultationType === 'in_person'}
                                                    onChange={(e) => setConsultationType(e.target.value)}
                                                    className="mr-2"
                                                />
                                                <span className="text-sm">In-Person</span>
                                            </label>
                                            <label className="flex items-center">
                                                <input
                                                    type="radio"
                                                    value="telehealth"
                                                    checked={consultationType === 'telehealth'}
                                                    onChange={(e) => setConsultationType(e.target.value)}
                                                    className="mr-2"
                                                />
                                                <span className="text-sm">Telehealth</span>
                                            </label>
                                        </div>
                                    </div>

                                    {/* Patient Notes */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Notes (Optional)
                                        </label>
                                        <textarea
                                            value={bookingData.patientNotes}
                                            onChange={(e) => setBookingData(prev => ({ ...prev, patientNotes: e.target.value }))}
                                            rows={3}
                                            placeholder="Any specific concerns or information you'd like to share..."
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>

                                    {/* Urgency */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Urgency Level
                                        </label>
                                        <select
                                            value={bookingData.urgency}
                                            onChange={(e) => setBookingData(prev => ({ ...prev, urgency: e.target.value }))}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        >
                                            <option value="low">Low - Routine follow-up</option>
                                            <option value="medium">Medium - Standard care needed</option>
                                            <option value="high">High - Urgent care required</option>
                                        </select>
                                    </div>

                                    {/* Cost Summary */}
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm text-gray-600">Consultation Fee</span>
                                            <span className="font-medium">${doctor.fees}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-gray-600">Platform Fee</span>
                                            <span className="font-medium">$0</span>
                                        </div>
                                        <hr className="my-2" />
                                        <div className="flex justify-between items-center">
                                            <span className="font-medium">Total</span>
                                            <span className="font-bold text-lg">${doctor.fees}</span>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex space-x-4">
                                        <button
                                            type="button"
                                            onClick={() => setShowBookingForm(false)}
                                            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                                        >
                                            Book Appointment
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}

                        {/* Payment Form */}
                        {showPaymentForm && (
                            <PaymentComponent
                                appointmentId={appointmentId}
                                amount={doctor.fees}
                                onPaymentSuccess={handlePaymentSuccess}
                                onPaymentCancel={handlePaymentCancel}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialistProfile;
