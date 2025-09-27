import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const PaymentComponent = ({ appointmentId, amount, onPaymentSuccess, onPaymentCancel }) => {
    const { backendUrl, token, userData } = useContext(AppContext);
    
    const [loading, setLoading] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [cardDetails, setCardDetails] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: ''
    });
    const [billingAddress, setBillingAddress] = useState({
        line1: '',
        line2: '',
        city: '',
        state: '',
        postal_code: '',
        country: 'US'
    });

    const handleCardInputChange = (e) => {
        const { name, value } = e.target;
        
        if (name === 'number') {
            // Format card number with spaces
            const formatted = value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
            setCardDetails(prev => ({ ...prev, [name]: formatted }));
        } else if (name === 'expiry') {
            // Format expiry date
            const formatted = value.replace(/\D/g, '').replace(/(.{2})/, '$1/');
            setCardDetails(prev => ({ ...prev, [name]: formatted }));
        } else if (name === 'cvc') {
            // Limit CVC to 4 digits
            const formatted = value.replace(/\D/g, '').slice(0, 4);
            setCardDetails(prev => ({ ...prev, [name]: formatted }));
        } else {
            setCardDetails(prev => ({ ...prev, [name]: value }));
        }
    };

    const handlePayment = async (e) => {
        e.preventDefault();
        
        if (!cardDetails.number || !cardDetails.expiry || !cardDetails.cvc || !cardDetails.name) {
            toast.error('Please fill in all card details');
            return;
        }

        try {
            setLoading(true);

            // Create payment intent
            const intentResponse = await axios.post(`${backendUrl}/api/payments/create-intent`, {
                appointmentId
            }, {
                headers: { token }
            });

            if (!intentResponse.data.success) {
                throw new Error(intentResponse.data.message);
            }

            // In a real implementation, you would use Stripe Elements or similar
            // to securely handle card details and create a payment method
            // For this demo, we'll simulate the payment process
            
            // Simulate payment processing
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Confirm payment
            const confirmResponse = await axios.post(`${backendUrl}/api/payments/confirm`, {
                paymentIntentId: 'pi_simulated_' + Date.now(),
                appointmentId
            }, {
                headers: { token }
            });

            if (confirmResponse.data.success) {
                toast.success('Payment successful!');
                onPaymentSuccess();
            } else {
                throw new Error(confirmResponse.data.message);
            }

        } catch (error) {
            console.log('Payment error:', error);
            toast.error(error.message || 'Payment failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Payment Details</h3>
            
            <form onSubmit={handlePayment} className="space-y-6">
                {/* Payment Method Selection */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                        Payment Method
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                        <label className={`flex items-center p-3 border rounded-lg cursor-pointer ${
                            paymentMethod === 'card' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                        }`}>
                            <input
                                type="radio"
                                value="card"
                                checked={paymentMethod === 'card'}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                className="mr-2"
                            />
                            <span className="text-sm">Credit/Debit Card</span>
                        </label>
                        <label className={`flex items-center p-3 border rounded-lg cursor-pointer ${
                            paymentMethod === 'paypal' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                        }`}>
                            <input
                                type="radio"
                                value="paypal"
                                checked={paymentMethod === 'paypal'}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                className="mr-2"
                            />
                            <span className="text-sm">PayPal</span>
                        </label>
                    </div>
                </div>

                {/* Card Details */}
                {paymentMethod === 'card' && (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Card Number
                            </label>
                            <input
                                type="text"
                                name="number"
                                value={cardDetails.number}
                                onChange={handleCardInputChange}
                                placeholder="1234 5678 9012 3456"
                                maxLength="19"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Expiry Date
                                </label>
                                <input
                                    type="text"
                                    name="expiry"
                                    value={cardDetails.expiry}
                                    onChange={handleCardInputChange}
                                    placeholder="MM/YY"
                                    maxLength="5"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    CVC
                                </label>
                                <input
                                    type="text"
                                    name="cvc"
                                    value={cardDetails.cvc}
                                    onChange={handleCardInputChange}
                                    placeholder="123"
                                    maxLength="4"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Cardholder Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={cardDetails.name}
                                onChange={handleCardInputChange}
                                placeholder="John Doe"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                    </div>
                )}

                {/* Billing Address */}
                <div className="space-y-4">
                    <h4 className="text-md font-medium text-gray-900">Billing Address</h4>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Address Line 1
                        </label>
                        <input
                            type="text"
                            value={billingAddress.line1}
                            onChange={(e) => setBillingAddress(prev => ({ ...prev, line1: e.target.value }))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Address Line 2 (Optional)
                        </label>
                        <input
                            type="text"
                            value={billingAddress.line2}
                            onChange={(e) => setBillingAddress(prev => ({ ...prev, line2: e.target.value }))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                City
                            </label>
                            <input
                                type="text"
                                value={billingAddress.city}
                                onChange={(e) => setBillingAddress(prev => ({ ...prev, city: e.target.value }))}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                State
                            </label>
                            <input
                                type="text"
                                value={billingAddress.state}
                                onChange={(e) => setBillingAddress(prev => ({ ...prev, state: e.target.value }))}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Postal Code
                            </label>
                            <input
                                type="text"
                                value={billingAddress.postal_code}
                                onChange={(e) => setBillingAddress(prev => ({ ...prev, postal_code: e.target.value }))}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Country
                            </label>
                            <select
                                value={billingAddress.country}
                                onChange={(e) => setBillingAddress(prev => ({ ...prev, country: e.target.value }))}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            >
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="GB">United Kingdom</option>
                                <option value="AU">Australia</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Payment Summary */}
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-md font-medium text-gray-900 mb-3">Payment Summary</h4>
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span>Consultation Fee</span>
                            <span>${amount}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span>Platform Fee (10%)</span>
                            <span>${(amount * 0.1).toFixed(2)}</span>
                        </div>
                        <hr />
                        <div className="flex justify-between font-medium">
                            <span>Total</span>
                            <span>${amount}</span>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                    <button
                        type="button"
                        onClick={onPaymentCancel}
                        className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={loading}
                        className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Processing...' : `Pay $${amount}`}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PaymentComponent;

