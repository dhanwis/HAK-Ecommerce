import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
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

            {/* <h2 className="animation a1">USER LOGIN</h2> */}
            <h4 className="animation a2">
              Welcome To diL hak, Please Enter Your mobile number
            </h4>
          </header>
          <form className='frm-lg'>
            <input
              type="text"
              placeholder="Mobile Number"
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
