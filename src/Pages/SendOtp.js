import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
    const [isOtpSent, setIsOtpSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Assuming here that you have a function to send OTP
        // You can implement your logic here to send OTP
        // For now, just toggling isOtpSent state
        setIsOtpSent(true);
    };

    return (
        <div className='page-wrapper'>
           
            <div className='page-content'>
                <section>
                    <div className="container">
                        <div className="row ">
                            <div className="col-lg-6 col-12" >
                                <img className="img-fluid" src="assets/images/login.png" alt="" width="300px" height="300px" style={{borderRadius:"60px"}}/>
                            </div>
                            <div className="col-lg-6 col-12">
                            <div class="d-flex justify-content-center align-items-center container">
        <div class="card1 py-5 px-3">
            <h5 class="m-0">Otp Verification</h5><span class="mobile-text">Enter the code we just send on your mobile phone </span>
            <div class="d-flex flex-row mt-5"><input type="text" class="frm" autofocus=""/><input type="text" class="frm"/><input type="text" class="frm"/><input type="text" class="frm"/></div>
            <div class="text-center mt-5"><span class="d-block mobile-text">Don't receive the code?</span><span class="font-weight-bold text-danger cursor">Resend</span></div>
        </div>
    </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Login;
