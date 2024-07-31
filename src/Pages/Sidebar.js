import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-menu">
        <ul>
       <Link to={'/Myorders'}><li>My Orders</li></Link>
            
          <li>My Reviews & Ratings</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
