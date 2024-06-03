import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import otpbg  from "../api/flower.jpg";
=======
>>>>>>> 7c54cb27d17f8c37ac937b2fd3eaa9b5f1cd9fba
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SendOtp.css'; // Ensure you have the CSS file linked

function SendOtp() {
    const [otp, setOtp] = useState(['', '', '', '']);
    const [error, setError] = useState('');
    const [timer, setTimer] = useState(60); // 10 minutes in seconds
    const [canResend, setCanResend] = useState(false);

    const navigate = useNavigate();

    const { id } = useParams(); // Get the product ID from the route parameters 
    console.log(id);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prevTimer => {
                if (prevTimer <= 1) {
                    clearInterval(interval);
                    setCanResend(true);
                    return 0;
                }
                return prevTimer - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleChange = (index, value, e) => {
        if (!isNaN(value)) {
            const newOtp = [...otp];
            newOtp[index] = value.replace(/\D/g, ''); // Remove non-numeric characters
            setOtp(newOtp);

            if (value && index < 3) {
                document.getElementById(`otp-${index + 1}`).focus();
            }

            setError('');
        } else {
            setError('Please enter numbers only.');
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && otp[index] === '') {
            if (index > 0) {
                document.getElementById(`otp-${index - 1}`).focus();
            }
        }
    };

    const handleVerifyOtp = async () => {
        // Implement your OTP verification logic here

        const enteredOtp = otp.join('');

        try {
            const userotp = await axios.patch(`http://127.0.0.1:8000/auth/customer/${id}/verify-otp/`, { otp: enteredOtp })
            if (userotp.status === 201) {
                navigate(`/Userregistration/${userotp.data.id}`);
            } else if (userotp.status === 200) {
                navigate(`/Userregistration/${userotp.data.id}`);
                //navigate(`/user/${userotp.data.id}`);
            } else if (userotp.status === 202) {
                navigate(`/Userregistration/${userotp.data.id}`);
            } else {
                console.log('Unexpected userotp status:', userotp.status);
            }
        } catch (error) {
            console.error('There was an error!', error);
        }
        //console.log("Entered OTP:", enteredOtp);

        // Example logic: compare enteredOtp with the actual OTP
    };

    const handleResendCode = () => {
        if (canResend) {
            console.log("Resend code requested.");
            setTimer(60);
            setCanResend(false);
        }
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className='page-wrapper1'>
            <div className='page-content1'>
                <section>
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-md-12 text-center">
                                <div className="title1">
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
                                            onKeyDown={(e) => handleKeyDown(index, e)}
                                        />
                                    ))}
                                    {error && <div className="text-danger">{error}</div>}
                                    <div className="mt-3">
                                    <Link 
                                            to="#" 
                                            onClick={handleResendCode} 
                                            style={{ color: canResend ? 'orange' : 'grey', pointerEvents: canResend ? 'auto' : 'none' }}
                                        >
                                            Resend Code {canResend ? '' : `(${formatTime(timer)})`}
                                        </Link>
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
                </section>
            </div>
        </div>
    );
}

export default SendOtp;
