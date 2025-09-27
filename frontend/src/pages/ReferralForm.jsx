import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const ReferralForm = () => {
    const { userData, backendUrl, token } = useContext(AppContext);
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        patientName: userData?.name || '',
        patientEmail: userData?.email || '',
        patientPhone: userData?.phone || '',
        referringDoctor: '',
        referringDoctorContact: '',
        reasonForReferral: '',
        medicalHistory: '',
        currentMedications: '',
        urgency: 'medium',
        preferredSpecialist: '',
        insuranceInfo: ''
    });
    
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.patientName || !formData.patientEmail || !formData.patientPhone || 
            !formData.referringDoctor || !formData.reasonForReferral) {
            toast.error('Please fill in all required fields');
            return;
        }

        try {
            setLoading(true);
            
            const response = await axios.post(`${backendUrl}/api/referrals/submit`, {
                ...formData,
                patientId: userData._id
            }, {
                headers: { token }
            });

            if (response.data.success) {
                toast.success('Referral submitted successfully!');
                navigate('/patient-dashboard');
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log('Referral submission error:', error);
            toast.error('Failed to submit referral. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">
                            Referral Form
                        </h1>
                        <p className="text-lg text-gray-600">
                            Please provide the following information to complete your referral request
                        </p>
                    </div>

                    {/* Form */}
                    <div className="bg-white rounded-lg shadow-sm p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Patient Information */}
                            <div className="border-b border-gray-200 pb-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Patient Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="patientName"
                                            value={formData.patientName}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="patientEmail"
                                            value={formData.patientEmail}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            name="patientPhone"
                                            value={formData.patientPhone}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Preferred Specialist
                                        </label>
                                        <select
                                            name="preferredSpecialist"
                                            value={formData.preferredSpecialist}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        >
                                            <option value="">Select a specialist</option>
                                            <option value="psychiatrist">Psychiatrist</option>
                                            <option value="psychologist">Psychologist</option>
                                            <option value="therapist">Therapist</option>
                                            <option value="neurologist">Neurologist</option>
                                            <option value="general_physician">General Physician</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Referring Doctor Information */}
                            <div className="border-b border-gray-200 pb-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Referring Doctor Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Doctor Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="referringDoctor"
                                            value={formData.referringDoctor}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Doctor Contact Information
                                        </label>
                                        <input
                                            type="text"
                                            name="referringDoctorContact"
                                            value={formData.referringDoctorContact}
                                            onChange={handleInputChange}
                                            placeholder="Phone number or email"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Medical Information */}
                            <div className="border-b border-gray-200 pb-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Medical Information</h3>
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Reason for Referral *
                                        </label>
                                        <textarea
                                            name="reasonForReferral"
                                            value={formData.reasonForReferral}
                                            onChange={handleInputChange}
                                            required
                                            rows={4}
                                            placeholder="Please describe the reason for seeking mental health services..."
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Medical History
                                        </label>
                                        <textarea
                                            name="medicalHistory"
                                            value={formData.medicalHistory}
                                            onChange={handleInputChange}
                                            rows={3}
                                            placeholder="Please describe any relevant medical history..."
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Current Medications
                                        </label>
                                        <textarea
                                            name="currentMedications"
                                            value={formData.currentMedications}
                                            onChange={handleInputChange}
                                            rows={3}
                                            placeholder="Please list any current medications..."
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Urgency Level
                                        </label>
                                        <select
                                            name="urgency"
                                            value={formData.urgency}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        >
                                            <option value="low">Low - Routine follow-up</option>
                                            <option value="medium">Medium - Standard care needed</option>
                                            <option value="high">High - Urgent care required</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Insurance Information */}
                            <div className="pb-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Insurance Information</h3>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Insurance Details
                                    </label>
                                    <textarea
                                        name="insuranceInfo"
                                        value={formData.insuranceInfo}
                                        onChange={handleInputChange}
                                        rows={3}
                                        placeholder="Please provide your insurance information..."
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-end space-x-4">
                                <button
                                    type="button"
                                    onClick={() => navigate('/patient-dashboard')}
                                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? 'Submitting...' : 'Submit Referral'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReferralForm;

