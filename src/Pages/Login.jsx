import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../Components/Footer/giphy.gif'
import axios from 'axios'

function Login() {
  const [phonenumber,setPhonenumber] = useState();
  const navigate = useNavigate()
  const Handlechange=(x)=>{
// console.log(x.target.value)
setPhonenumber(x.target.value);
  }
  const Handlesubmit = async (y) => {
    y.preventDefault();
    try {
      const response = await axios.post('https://hak.pythonanywhere.com/auth/customer/', { phone_number: phonenumber });
      if (response.status === 201) {
        console.log(response.data);
        navigate(`/send-otp/${response.data.id}`);
      } else {
        console.log('Unexpected response status:', response.status);
      }
    } catch (error) {
      console.error('There was an error!', error);
    }
   console.log(y)
   
  }
    return (
    <div className='login'>
       <div className="contr">
      <div className="left">
        <div className="login-section">
          <header>
          {/* <img src="assets/images/logo.png" width='100%' className="animation a1"/>  */}
          <img src={logo} width='50%' height='50%' className="animation a1"/> 

         
            
          </header>
          <form className='frm-lg'>
            <input
            name='phone_number'
              type="text"
              placeholder="Enter Your Mobile Number"
              className="input-field animation a3"
              onChange={Handlechange}
              maxLength={10}
              required
            />
            {/* <Link to="/send-otp" className="animation a4" ></Link> */}
            <button className="btlg" onClick={Handlesubmit}>Send OTP</button>
          </form>
        </div>
      </div>
      <div className="right"></div>
    </div>
    </div>
  )
}

export default Login
