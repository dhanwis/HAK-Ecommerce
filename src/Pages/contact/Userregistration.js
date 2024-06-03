import React, { useState } from 'react';
import './Userregistration.css';
import signupbg from '../login.jpg';
import { useParams } from 'react-router-dom';

function Userregistration() {
    const { id } = useParams();

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        address: '',
        terms: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="signup-container">
            <div className="signup-image">
                <img src={signupbg} alt="Signup Background" />
            </div>
            <div className="signup-form">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="firstname"
                        placeholder="Firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="lastname"
                        placeholder="Lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                    <div className="terms">
                        <input
                            type="checkbox"
                            name="terms"
                            checked={formData.terms}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="terms">I agree to the terms and conditions</label>
                    </div>
                    <button type="submit">REGISTER</button>
                </form>
            </div>
        </div>
    );
}

export default Userregistration;
