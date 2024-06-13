import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Userregistration.css'; // Import the CSS file for custom styling

function UserRegistration() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            // Simulate getting user_id from some user context or login response
            const user_id = 1; // Replace with actual logic to get user_id

            const response = await axios.post(`http://127.0.0.1:8000/auth/user/customer/${user_id}/profile/add/`, {
                ...data,
                user_id: user_id
            });

            if (response.status === 201 || response.status === 200) {
                setUserId(response.data.user_id);
                navigate(`/user/${response.data.user_id}`);
            } else {
                console.log('Unexpected registration status:', response.status);
            }
        } catch (error) {
            console.error('There was an error during registration:', error);
        }
    };

    return (
        <div className="container-fluid registration-container">
            <div className="row">
                <div className="col-md-4 welcome-section">
                    <div className="welcome-content">
                        <h1 style={{color:'white'}}>User Registration</h1>
                        <p style={{color:'grey'}}>Register to experience more features online.</p>
                    </div>
                </div>
                <div className="col-md-8 form-section">
                    <div className="form-container">
                        <form onSubmit={handleSubmit(onSubmit)} className="registration-form">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input
                                            id="firstname"
                                            className="form-control"
                                            placeholder="First Name"
                                            {...register('firstname', { required: 'First name is required' })}
                                        />
                                        {errors.firstname && <span className="text-danger">{errors.firstname.message}</span>}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input
                                            id="lastname"
                                            className="form-control"
                                            placeholder="Last Name"
                                            {...register('lastname', { required: 'Last name is required' })}
                                        />
                                        {errors.lastname && <span className="text-danger">{errors.lastname.message}</span>}
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input
                                            id="email"
                                            type="email"
                                            className="form-control"
                                            placeholder="Email"
                                            {...register('email', {
                                                required: 'Email is required',
                                                pattern: {
                                                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                                    message: 'Email is not valid'
                                                }
                                            })}
                                        />
                                        {errors.email && <span className="text-danger">{errors.email.message}</span>}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input
                                            id="phonenumber"
                                            type="tel"
                                            className="form-control"
                                            placeholder="Phone Number"
                                            {...register('phonenumber', {
                                                required: 'Phone number is required',
                                                pattern: {
                                                    value: /^[0-9]{10}$/,
                                                    message: 'Phone number is not valid'
                                                }
                                            })}
                                        />
                                        {errors.phonenumber && <span className="text-danger">{errors.phonenumber.message}</span>}
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input
                                            id="street"
                                            className="form-control"
                                            placeholder="Street"
                                            {...register('street', { required: 'Street is required' })}
                                        />
                                        {errors.street && <span className="text-danger">{errors.street.message}</span>}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input
                                            id="city"
                                            className="form-control"
                                            placeholder="City"
                                            {...register('city', { required: 'City is required' })}
                                        />
                                        {errors.city && <span className="text-danger">{errors.city.message}</span>}
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input
                                            id="state"
                                            className="form-control"
                                            placeholder="State"
                                            {...register('state', { required: 'State is required' })}
                                        />
                                        {errors.state && <span className="text-danger">{errors.state.message}</span>}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input
                                            id="pincode"
                                            className="form-control"
                                            placeholder="Pincode"
                                            {...register('pincode', {
                                                required: 'Pincode is required',
                                                pattern: {
                                                    value: /^[0-9]{6}$/,
                                                    message: 'Pincode is not valid'
                                                }
                                            })}
                                        />
                                        {errors.pincode && <span className="text-danger">{errors.pincode.message}</span>}
                                    </div>
                                </div>
                            </div>

                            <button type="submit" className="btn1 btn-primary1 mt-3 w-100">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserRegistration;