import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CalendarComponent = ({ doctorId, onSlotSelect, selectedDate, selectedTime }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [availableSlots, setAvailableSlots] = useState({});
    const [loading, setLoading] = useState(false);
    const [workingHours, setWorkingHours] = useState({});

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    useEffect(() => {
        loadDoctorSchedule();
    }, [doctorId, currentMonth]);

    const loadDoctorSchedule = async () => {
        try {
            setLoading(true);
            // This would be an API call to get doctor's schedule
            // For now, we'll simulate some data
            const mockSlots = generateMockSlots();
            setAvailableSlots(mockSlots);
            
            // Mock working hours
            setWorkingHours({
                monday: { start: '09:00', end: '17:00', available: true },
                tuesday: { start: '09:00', end: '17:00', available: true },
                wednesday: { start: '09:00', end: '17:00', available: true },
                thursday: { start: '09:00', end: '17:00', available: true },
                friday: { start: '09:00', end: '17:00', available: true },
                saturday: { start: '10:00', end: '14:00', available: true },
                sunday: { start: '10:00', end: '14:00', available: false }
            });
        } catch (error) {
            console.log('Error loading doctor schedule:', error);
        } finally {
            setLoading(false);
        }
    };

    const generateMockSlots = () => {
        const slots = {};
        const today = new Date();
        
        for (let i = 0; i < 30; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            const dateStr = date.toISOString().split('T')[0];
            
            // Generate random available slots
            const daySlots = [];
            const startHour = 9;
            const endHour = 17;
            
            for (let hour = startHour; hour < endHour; hour++) {
                if (Math.random() > 0.3) { // 70% chance of availability
                    daySlots.push(`${hour.toString().padStart(2, '0')}:00`);
                    if (Math.random() > 0.5) { // 50% chance of 30-minute slot
                        daySlots.push(`${hour.toString().padStart(2, '0')}:30`);
                    }
                }
            }
            
            slots[dateStr] = daySlots;
        }
        
        return slots;
    };

    const getDaysInMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDayOfWeek = firstDay.getDay();

        const days = [];
        
        // Add empty cells for days before the first day of the month
        for (let i = 0; i < startingDayOfWeek; i++) {
            days.push(null);
        }
        
        // Add days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            days.push(new Date(year, month, day));
        }
        
        return days;
    };

    const isDateAvailable = (date) => {
        if (!date) return false;
        const dateStr = date.toISOString().split('T')[0];
        return availableSlots[dateStr] && availableSlots[dateStr].length > 0;
    };

    const isDateSelected = (date) => {
        if (!date || !selectedDate) return false;
        return date.toISOString().split('T')[0] === selectedDate;
    };

    const handleDateClick = (date) => {
        if (!isDateAvailable(date)) return;
        const dateStr = date.toISOString().split('T')[0];
        onSlotSelect(dateStr, null);
    };

    const getTimeSlots = () => {
        if (!selectedDate) return [];
        return availableSlots[selectedDate] || [];
    };

    const handleTimeSlotClick = (time) => {
        onSlotSelect(selectedDate, time);
    };

    const navigateMonth = (direction) => {
        setCurrentMonth(prev => {
            const newMonth = new Date(prev);
            newMonth.setMonth(prev.getMonth() + direction);
            return newMonth;
        });
    };

    const daysInMonth = getDaysInMonth(currentMonth);
    const timeSlots = getTimeSlots();

    return (
        <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Select Date & Time</h3>
                <div className="flex items-center space-x-2">
                    <button
                        onClick={() => navigateMonth(-1)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <span className="text-lg font-medium text-gray-900 min-w-[140px] text-center">
                        {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                    </span>
                    <button
                        onClick={() => navigateMonth(1)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Calendar Grid */}
            <div className="mb-6">
                <div className="grid grid-cols-7 gap-1 mb-2">
                    {days.map(day => (
                        <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                            {day}
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                    {daysInMonth.map((date, index) => (
                        <button
                            key={index}
                            onClick={() => handleDateClick(date)}
                            disabled={!isDateAvailable(date)}
                            className={`
                                p-2 text-sm rounded-lg transition-colors
                                ${!date ? 'invisible' : ''}
                                ${isDateSelected(date) 
                                    ? 'bg-blue-600 text-white' 
                                    : isDateAvailable(date)
                                        ? 'hover:bg-blue-50 text-gray-900'
                                        : 'text-gray-400 cursor-not-allowed'
                                }
                            `}
                        >
                            {date?.getDate()}
                        </button>
                    ))}
                </div>
            </div>

            {/* Time Slots */}
            {selectedDate && (
                <div>
                    <h4 className="text-md font-medium text-gray-900 mb-4">
                        Available Times for {new Date(selectedDate).toLocaleDateString()}
                    </h4>
                    {loading ? (
                        <div className="text-center py-4">
                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mx-auto"></div>
                        </div>
                    ) : timeSlots.length > 0 ? (
                        <div className="grid grid-cols-4 gap-2">
                            {timeSlots.map((time, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleTimeSlotClick(time)}
                                    className={`
                                        p-2 text-sm rounded-lg border transition-colors
                                        ${selectedTime === time
                                            ? 'bg-blue-600 text-white border-blue-600'
                                            : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:border-blue-300'
                                        }
                                    `}
                                >
                                    {time}
                                </button>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500 text-center py-4">No available slots for this date</p>
                    )}
                </div>
            )}

            {/* Working Hours Info */}
            <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Working Hours</h4>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                    {Object.entries(workingHours).map(([day, hours]) => (
                        <div key={day} className="flex justify-between">
                            <span className="capitalize">{day}</span>
                            <span className={hours.available ? 'text-gray-900' : 'text-gray-400'}>
                                {hours.available ? `${hours.start} - ${hours.end}` : 'Closed'}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CalendarComponent;

