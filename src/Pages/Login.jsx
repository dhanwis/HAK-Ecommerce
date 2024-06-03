import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../Components/Footer/giphy.gif';
import axios from 'axios';

function Login() {
  const [phonenumber, setPhonenumber] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setPhonenumber(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/auth/customer/', { phone_number: phonenumber });
      if (response.status === 201) {
        console.log(response.data);
        navigate(`/send-otp/${response.data.id}`);
      } else {
        console.log('Unexpected response status:', response.status);
      }
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div className='login'>
      <div className="contr">
        <div className="left">
          <div className="login-section">
            <header>
              <img src={logo} width='50%' height='50%' className="animation a1" alt="Logo" />
            </header>
            <form className='frm-lg' onSubmit={handleSubmit}>
              <input
                name='phone_number'
                type="text"
                placeholder="Enter Your Mobile Number"
                className="input-field animation a3"
                onChange={handleChange}
                maxLength={10}
                required
              />
              <button type="submit" className="btlg">Send OTP</button>
            </form>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}

export default Login;
