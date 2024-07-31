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

  const [isEditing, setIsEditing] = useState({
    personalInfo: false,
    addressInfo: false,
    contactInfo: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const toggleEdit = (section) => {
    setIsEditing({ ...isEditing, [section]: !isEditing[section] });
  };

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
      <h3 className='text-center'>Edit Profile</h3>
      <form className="edit-profile-form" onSubmit={handleSubmit}>
        <div className="section">
          <h4>Personal Information <Link to="" onClick={() => toggleEdit('personalInfo')}>Edit</Link></h4>
          <div className={`form-row ${!isEditing.personalInfo ? 'disabled' : ''}`}>
            <label>
              First Name:
              <input
                type="text"
                name="firstname"
                value={ViewProfile.firstname}
                
                disabled={!isEditing.personalInfo}
              />
            </label>
            <label>
              Last Name:
              <input
                type="text"
                name="lastname"
                value={ViewProfile.lastname}
                
                disabled={!isEditing.personalInfo}
              />
            </label>
          </div>
        </div>
        <div className="section">
          <h4>Address Information <Link to="" onClick={() => toggleEdit('addressInfo')}>Edit</Link></h4>
          <div className={`form-row ${!isEditing.addressInfo ? 'disabled' : ''}`}>
            <label>
              Street:
              <input
                type="text"
                name="street"
                value={ViewProfile.street}
                onChange={handleChange}
                disabled={!isEditing.addressInfo}
              />
            </label>
            <label>
              City:
              <input
                type="text"
                name="city"
                value={ViewProfile.city}
                
                disabled={!isEditing.addressInfo}
              />
            </label>
          </div>
          <div className={`form-row ${!isEditing.addressInfo ? 'disabled' : ''}`}>
            <label>
              State:
              <input
                type="text"
                name="state"
                value={ViewProfile.state}
               
                disabled={!isEditing.addressInfo}
              />
            </label>
            <label>
              Pin code:
              <input
                type="text"
                name="pincode"
                value={ViewProfile.pincode}
                onChange={handleChange}
                disabled={!isEditing.addressInfo}
              />
            </label>
          </div>
        </div>
        <div className="section">
          <h4>Contact Information <Link to="" onClick={() => toggleEdit('contactInfo')}>Edit</Link></h4>
          <div className={`form-row ${!isEditing.contactInfo ? 'disabled' : ''}`}>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={ViewProfile.email}
                onChange={handleChange}
                disabled={!isEditing.contactInfo}
              />
            </label>
            <label>
              Phone:
              <input
                type="text"
                name="phone"
                value={ViewProfile.phone_number}
                onChange={handleChange}
                disabled={!isEditing.contactInfo}
              />
            </label>
          </div>
        </div>
        <button type="submit">Save</button>
      </form>
      <div className="faqs">
        <a href="#">Delete Account</a>
      </div>
    </div>
  );
};

export default EditProfile;
