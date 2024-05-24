import React from 'react';
import './Userregistration.css';
import { useState } from 'react';
import signupbg from '../login.jpg';
import { useParams } from 'react-router-dom';

function Userregistration() {
    const { id } = useParams();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        newPassword: '',
        confirmPassword: '',
        address: '',
        pincode: '',
        altAddress: '',
        altEmail: '',
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
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log('Form data submitted:', formData);
        // You can handle form submission here, e.g., send data to an API
    };

    return (
        <div className="signup-container">
            <div className='signup-image'><img src={signupbg} width="350px" height="505px" alt="Signup Background" /></div>
            <div className="signup-form">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Username"
                        value={formData.name}
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
                        
                    </div>
                    <button type="submit">REGISTER</button>
                    <p>
                        Already Have account?{' '}
                        <a href="/login" className="login-link">
                            Login
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Userregistration;
