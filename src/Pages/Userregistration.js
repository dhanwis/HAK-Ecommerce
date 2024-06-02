import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UserRegistration() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
 
    const onSubmit = async (data) => {
        try {
            //backend to be done
            const response = await axios.post('http://127.0.0.1:8000/auth/user/customer/profile/add/', data);
            if (response.status === 201 || response.status === 200 ) {
                console.log(response.data.id);
                window.location.href=`/user/${response.data.id}`;
            } else {
                console.log('Unexpected registration status:', response.status);
            }
        } catch (error) {
            if (error.response && error.response.status === 409) {
                try {
                    const loginResponse = await axios.post('https://hak.pythonanywhere.com/auth/customer/login/', data);
                    if (loginResponse.status === 200) {
                        console.log(loginResponse.data.id);
                        navigate(`/user/${loginResponse.data.id}`);
                    } else {
                        console.log('Unexpected login status:', loginResponse.status);
                    }
                } catch (loginError) {
                    console.error('There was an error logging in!', loginError);
                }
            } else {
                console.error('There was an error registering the user!', error);
            }
        }
    };
    return (
        <div className='container' style={{ marginTop: '50px' }}>
            <h2>User Registration</h2>
            <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '400px', margin: 'auto' }}>
                <div className="form-group">
                    <label htmlFor="firstname">First Name</label>
                    <input
                        id="firstname"
                        className="form-control"
                        {...register('firstname', { required: 'First name is required' })}
                    />
                    {errors.firstname && <span className="text-danger">{errors.firstname.message}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="lastname">Last Name</label>
                    <input
                        id="lastname"
                        className="form-control"
                        {...register('lastname', { required: 'Last name is required' })}
                    />
                    {errors.lastname && <span className="text-danger">{errors.lastname.message}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        className="form-control"
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

                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                        id="address"
                        className="form-control"
                        {...register('address', { required: 'Address is required' })}
                    />
                    {errors.address && <span className="text-danger">{errors.address.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary mt-3">Register</button>
            </form>
        </div>
    );
}

export default UserRegistration;
