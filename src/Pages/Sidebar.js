import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-menu">
        <ul>
          <li>My Orders</li>
          <li>Account Settings</li>
          <li>Payments</li>
          <li>My Coupons</li>
          <li>My Reviews & Ratings</li>
          <li>All Notifications</li>
          <li>My Cart</li>
          <li>My Wishlist</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
