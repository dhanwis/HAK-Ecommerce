import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './EditProfile.css';
import axios from 'axios';
import { BASE_URL } from '../services/baseurl';
import { error } from 'jquery';

const EditProfile = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    lastname: '',
    street: '',
    city: '',
    state: '',
    pincode: '',
    email: '',
    phone: '',
  });

  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

// to get profile data
const [ViewProfile,setViewProfile]=useState([])

const userId = sessionStorage.getItem('userId');

useEffect(()=>{

axios.get(`${BASE_URL}/client/profile/${userId}/`)
.then(response=>{
  console.log("response",response);
  setViewProfile(response.data)
})
.catch(error=>{
  console.error("Error in fetching data",error);
})


},[])

  return (
    <div className="edit-profile">
      <h3 className='text-center'>My Profile</h3>
      <form className="edit-profile-form" onSubmit={handleSubmit}>
        <div className="section">
          <h4>Personal Information </h4>
          <div className='form-row' >
            <label>
              First Name:
              <input
                type="text"
                name="firstname"
                value={ViewProfile.firstname}
                readOnly
                
                
              />
            </label>
            <label>
              Last Name:
              <input
                type="text"
                name="lastname"
                value={ViewProfile.lastname}
                readOnly
               
              />
            </label>
          </div>
        </div>
        <div className="section">
          <h4>Address Information</h4>
          <div className='form-row'>
            <label>
              Street:
              <input
                type="text"
                name="street"
                value={ViewProfile.street}
               
               readOnly
              />
            </label>
            <label>
              City:
              <input
                type="text"
                name="city"
                value={ViewProfile.city}
                
                readOnly
              />
            </label>
          </div>
          <div className='form-row'>
            <label>
              State:
              <input
                type="text"
                name="state"
                value={ViewProfile.state}
               readOnly
               
              />
            </label>
            <label>
              Pin code:
              <input
                type="text"
                name="pincode"
                value={ViewProfile.pincode}
               readOnly
              />
            </label>
          </div>
        </div>
        <div className="section">
          <h4>Contact Information</h4>
          <div className='form-row'>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={ViewProfile.email}
                readOnly
              />
            </label>
            <label>
              Phone:
              <input
                type="text"
                name="phone"
                value={ViewProfile.phone_number}
                readOnly
              />
            </label>
          </div>
        </div>
       
      </form>
      
    </div>
  );
};

export default EditProfile;
