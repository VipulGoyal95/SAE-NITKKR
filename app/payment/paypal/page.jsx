"use client"

import { useState } from 'react';
import axios from 'axios';
import './paypal.css';

const Paypal = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        amount: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [fieldErrors, setFieldErrors] = useState({});

    const validateForm = () => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10}$/;

        if (!formData.name.trim()) {
            errors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            errors.email = 'Please enter a valid email address';
        }

        if (!formData.phone.trim()) {
            errors.phone = 'Phone number is required';
        } else if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
            errors.phone = 'Please enter a valid 10-digit phone number';
        }

        if (!formData.amount) {
            errors.amount = 'Amount is required';
        } else if (isNaN(formData.amount) || parseFloat(formData.amount) <= 0) {
            errors.amount = 'Please enter a valid amount greater than 0';
        }

        setFieldErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        // Clear error for the field being edited
        if (fieldErrors[name]) {
            setFieldErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const handlePayment = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setIsLoading(true);
        setError('');
    
        try {
            const res = await axios.post('https://sae-backend.vercel.app/api/paypal/payment', formData);
    
            if (res && res.data) {
                window.location.href = res.data.links[1].href;
            }
        } catch (error) {
            console.error('Error:', error);
            setError('Failed to process payment. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="paypal-container">
            <div className="paypal-form">
                <div className="paypal-logo">
                    <img 
                        src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_150x38.png" 
                        alt="PayPal Logo" 
                    />
                </div>
                <form onSubmit={handlePayment}>
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Enter your full name"
                            disabled={isLoading}
                            className={fieldErrors.name ? 'error' : ''}
                        />
                        {fieldErrors.name && <span className="field-error">{fieldErrors.name}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Enter your email"
                            disabled={isLoading}
                            className={fieldErrors.email ? 'error' : ''}
                        />
                        {fieldErrors.email && <span className="field-error">{fieldErrors.email}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="Enter your phone number"
                            disabled={isLoading}
                            className={fieldErrors.phone ? 'error' : ''}
                        />
                        {fieldErrors.phone && <span className="field-error">{fieldErrors.phone}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="amount">Amount (USD)</label>
                        <input
                            type="number"
                            id="amount"
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                            required
                            placeholder="Enter amount"
                            min="1"
                            step="0.01"
                            disabled={isLoading}
                            className={fieldErrors.amount ? 'error' : ''}
                        />
                        {fieldErrors.amount && <span className="field-error">{fieldErrors.amount}</span>}
                    </div>
                    {error && <div className="error-message">{error}</div>}
                    <button 
                        type="submit" 
                        className="paypal-button"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <div className="loader-container">
                                <div className="loader"></div>
                                Processing...
                            </div>
                        ) : (
                            'Proceed to Payment'
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Paypal;