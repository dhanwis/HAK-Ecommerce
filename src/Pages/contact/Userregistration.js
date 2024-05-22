import React from 'react'
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
        console.log('Form data submitted:', formData);
        // You can handle form submission here, e.g., send data to an API
      };
  return (
    <div className="signup-container">
    <div className='signup-image'><img src={signupbg} width="350px" height="505px"/></div>
    <div className="signup-form">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="JOHN DOE"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-MAIL"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="PASSWORD"
          value={formData.password}
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
          <span>
            I agree all statement in{' '}
            <a href="/terms" target="_blank" rel="noopener noreferrer">
              Terms & Conditions
            </a>
          </span>
        </div>
        <button type="submit">SIGN UP</button>
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

export default Userregistration