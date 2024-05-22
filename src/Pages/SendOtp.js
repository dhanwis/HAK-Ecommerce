import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import otpbg  from "../api/flower.avif";
import { useParams } from 'react-router-dom';
import axios from 'axios';

function SendOtp() {
    const [otp, setOtp] = useState(['', '', '', '']);
    const [error, setError] = useState('');

    const { id } = useParams(); // Get the product ID from the route parameters 
  console.log(id)

    const handleChange = (index, value, e) => {
        if (!isNaN(value)) {
            const newOtp = [...otp];
            newOtp[index] = value.replace(/\D/g, ''); // Remove non-numeric characters
            setOtp(newOtp);

            if (value && index < 3) {
                document.getElementById(`otp-${index + 1}`).focus();
            }

            if (!value &&  index > 0) {
                document.getElementById(`otp-${index - 1}`).focus();
            }

            setError('');
        } else {
            setError('Please enter numbers only.');
        }
    };

    const handleVerifyOtp = () => {
        // Implement your OTP verification logic here
         
        const enteredOtp = otp.join('');
        //console.log("Entered OTP:", enteredOtp);
        const userotp = axios.patch(`https://hak.pythonanywhere.com/auth/customer/${id}/verify-otp/`,{otp:enteredOtp})
        // Example logic: compare enteredOtp with the actual OTP
        console.log(userotp)
    };

    const handleResendCode = () => {
        // Implement your resend code logic here
        console.log("Resend code requested.");
    };

    return (
        <div className='page-wrapper'  style={{backgroundImage: `url(${otpbg})`,  backgroundRepeat:'no-repeat',backgroundSize:'100% 100%',overflow:'hidden',height:'100vh'}}>
            <div className='page-content'>
                <section>
                    <div className="container" style={{borderRadius:'20px',background:'rgba(255,255,255,0.5)',height:'500px',width:'800px',marginTop:'80px'}}>
                        <div className="row justify-content-md-center">
                            <div className="col-md-4 text-center">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="title" style={{fontSize:"28px",fontWeight:"bold",marginTop:'80px'}}>
                                            OTP VERIFICATION
                                        </div>

                                        <form className="mt-5">
                                            {otp.map((digit, index) => (
                                                <input
                                                    key={index}
                                                    type="text"
                                                    value={digit}
                                                    maxLength="1"
                                                    id={`otp-${index}`}
                                                    className="otpInput"
                                                    onChange={(e) => handleChange(index, e.target.value, e)}
                                                />
                                            ))}
                                            {error && <div className="text-danger">{error}</div>}
                                            <div className="mt-3">
                                                <Link to="#" onClick={handleResendCode}>Resend Code</Link>
                                            </div>
                                            <button
                                                type="button"
                                                className='btn btn-primary btn-block mt-4 mb-4 customBtn'
                                                onClick={handleVerifyOtp}
                                            >
                                                Verify OTP
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default SendOtp;
