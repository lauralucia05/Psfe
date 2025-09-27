import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const ScheduleManagement = () => {
    const { userData, backendUrl, token } = useContext(AppContext);
    
    const [schedule, setSchedule] = useState({
        workingHours: {
            monday: { start: '09:00', end: '17:00', available: true },
            tuesday: { start: '09:00', end: '17:00', available: true },
            wednesday: { start: '09:00', end: '17:00', available: true },
            thursday: { start: '09:00', end: '17:00', available: true },
            friday: { start: '09:00', end: '17:00', available: true },
            saturday: { start: '10:00', end: '14:00', available: false },
            sunday: { start: '10:00', end: '14:00', available: false }
        },
        slotDuration: 30,
        timezone: 'UTC'
    });
    
    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        loadSchedule();
    }, []);

    const loadSchedule = async () => {
        try {
            setLoading(true);
            const response = await axios.post(`${backendUrl}/api/doctor/profile`, {
                docId: userData._id
            }, {
                headers: { token }
            });

            if (response.data.success && response.data.profileData.calendarSettings) {
                setSchedule(response.data.profileData.calendarSettings);
            }
        } catch (error) {
            console.log('Load schedule error:', error);
            toast.error('Failed to load schedule');
        } finally {
            setLoading(false);
        }
    };

    const handleDayToggle = (day) => {
        setSchedule(prev => ({
            ...prev,
            workingHours: {
                ...prev.workingHours,
                [day]: {
                    ...prev.workingHours[day],
                    available: !prev.workingHours[day].available
                }
            }
        }));
    };

    const handleTimeChange = (day, field, value) => {
        setSchedule(prev => ({
            ...prev,
            workingHours: {
                ...prev.workingHours,
                [day]: {
                    ...prev.workingHours[day],
                    [field]: value
                }
            }
        }));
    };

    const handleSlotDurationChange = (value) => {
        setSchedule(prev => ({
            ...prev,
            slotDuration: parseInt(value)
        }));
    };

    const handleTimezoneChange = (value) => {
        setSchedule(prev => ({
            ...prev,
            timezone: value
        }));
    };

    const handleSaveSchedule = async () => {
        try {
            setSaving(true);
            
            const response = await axios.post(`${backendUrl}/api/doctor/update-profile`, {
                docId: userData._id,
                calendarSettings: schedule
            }, {
                headers: { token }
            });

            if (response.data.success) {
                toast.success('Schedule updated successfully!');
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log('Save schedule error:', error);
            toast.error('Failed to save schedule');
        } finally {
            setSaving(false);
        }
    };

    const generateTimeSlots = (startTime, endTime, duration) => {
        const slots = [];
        const start = new Date(`2000-01-01T${startTime}:00`);
        const end = new Date(`2000-01-01T${endTime}:00`);
        
        while (start < end) {
            slots.push(start.toTimeString().slice(0, 5));
            start.setMinutes(start.getMinutes() + duration);
        }
        
        return slots;
    };

    const days = [
        { key: 'monday', label: 'Monday' },
        { key: 'tuesday', label: 'Tuesday' },
        { key: 'wednesday', label: 'Wednesday' },
        { key: 'thursday', label: 'Thursday' },
        { key: 'friday', label: 'Friday' },
        { key: 'saturday', label: 'Saturday' },
        { key: 'sunday', label: 'Sunday' }
    ];

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading schedule...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Schedule Management</h1>
                        <p className="text-gray-600">Manage your availability and working hours</p>
                    </div>

                    {/* Schedule Settings */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-6">General Settings</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Slot Duration (minutes)
                                </label>
                                <select
                                    value={schedule.slotDuration}
                                    onChange={(e) => handleSlotDurationChange(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value={15}>15 minutes</option>
                                    <option value={30}>30 minutes</option>
                                    <option value={45}>45 minutes</option>
                                    <option value={60}>60 minutes</option>
                                </select>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Timezone
                                </label>
                                <select
                                    value={schedule.timezone}
                                    onChange={(e) => handleTimezoneChange(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="UTC">UTC</option>
                                    <option value="America/New_York">Eastern Time</option>
                                    <option value="America/Chicago">Central Time</option>
                                    <option value="America/Denver">Mountain Time</option>
                                    <option value="America/Los_Angeles">Pacific Time</option>
                                    <option value="Europe/London">London</option>
                                    <option value="Europe/Paris">Paris</option>
                                    <option value="Asia/Tokyo">Tokyo</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Weekly Schedule */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-6">Weekly Schedule</h2>
                        
                        <div className="space-y-4">
                            {days.map((day) => (
                                <div key={day.key} className="border border-gray-200 rounded-lg p-4">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={schedule.workingHours[day.key].available}
                                                onChange={() => handleDayToggle(day.key)}
                                                className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                            />
                                            <h3 className="text-lg font-medium text-gray-900">{day.label}</h3>
                                        </div>
                                        <span className={`px-2 py-1 text-xs rounded-full ${
                                            schedule.workingHours[day.key].available 
                                                ? 'bg-green-100 text-green-800' 
                                                : 'bg-gray-100 text-gray-800'
                                        }`}>
                                            {schedule.workingHours[day.key].available ? 'Available' : 'Unavailable'}
                                        </span>
                                    </div>
                                    
                                    {schedule.workingHours[day.key].available && (
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Start Time
                                                </label>
                                                <input
                                                    type="time"
                                                    value={schedule.workingHours[day.key].start}
                                                    onChange={(e) => handleTimeChange(day.key, 'start', e.target.value)}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    End Time
                                                </label>
                                                <input
                                                    type="time"
                                                    value={schedule.workingHours[day.key].end}
                                                    onChange={(e) => handleTimeChange(day.key, 'end', e.target.value)}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                />
                                            </div>
                                        </div>
                                    )}
                                    
                                    {schedule.workingHours[day.key].available && (
                                        <div className="mt-4">
                                            <h4 className="text-sm font-medium text-gray-700 mb-2">Available Time Slots</h4>
                                            <div className="bg-gray-50 p-3 rounded-lg">
                                                <div className="grid grid-cols-6 gap-2">
                                                    {generateTimeSlots(
                                                        schedule.workingHours[day.key].start,
                                                        schedule.workingHours[day.key].end,
                                                        schedule.slotDuration
                                                    ).map((slot, index) => (
                                                        <span key={index} className="text-xs bg-white px-2 py-1 rounded border">
                                                            {slot}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Save Button */}
                    <div className="mt-8 flex justify-end">
                        <button
                            onClick={handleSaveSchedule}
                            disabled={saving}
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {saving ? 'Saving...' : 'Save Schedule'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScheduleManagement;

