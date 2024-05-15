import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Components/Footer/giphy.gif'
function Login() {
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
              type="text"
              placeholder="Enter Your Mobile Number"
              className="input-field animation a3"
              maxLength={10}
              required
            />
            <Link to="/send-otp" className="animation a4" ><button className="btlg">Send OTP</button></Link>
          </form>
        </div>
      </div>
      <div className="right"></div>
    </div>
    </div>
  )
}

export default Login
