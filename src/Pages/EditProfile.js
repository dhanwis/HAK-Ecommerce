import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './EditProfile.css';

const EditProfile = () => {
  const [formData, setFormData] = useState({
    firstname: '',
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
                value={formData.firstname}
                onChange={handleChange}
                disabled={!isEditing.personalInfo}
              />
            </label>
            <label>
              Last Name:
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
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
                value={formData.street}
                onChange={handleChange}
                disabled={!isEditing.addressInfo}
              />
            </label>
            <label>
              City:
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
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
                value={formData.state}
                onChange={handleChange}
                disabled={!isEditing.addressInfo}
              />
            </label>
            <label>
              Pin code:
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
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
                value={formData.email}
                onChange={handleChange}
                disabled={!isEditing.contactInfo}
              />
            </label>
            <label>
              Phone:
              <input
                type="text"
                name="phone"
                value={formData.phone}
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
