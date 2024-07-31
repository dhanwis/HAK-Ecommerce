import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './EditProfile.css';
import axios from 'axios';
import { BASE_URL } from '../services/baseurl';
import { error } from 'jquery';
import BasicTable from './OrderTable';
import Table from 'react-bootstrap/Table';
import Item from 'antd/es/list/Item';

const Myorders = () => {
  
  


// to get profile data
const [ViewOrder,setViewOrder]=useState([])

const userId = sessionStorage.getItem('userId');

useEffect(()=>{

axios.get(`${BASE_URL}/client/order/${userId}/`)
.then(response=>{
  console.log("re",response);
  setViewOrder(response.data)
})
.catch(error=>{
  console.error("Error in fetching data",error);
})


},[])

  return (
    <div className="edit-profile">
      <h3 className='text-center'>My Orders</h3>
      <Table striped bordered hover >
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Product</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {
           ViewOrder && ViewOrder.length>0 ? (
            ViewOrder.map((Item)=>(

       
            <tr>
          <td>1</td>
          <td>{Item.first_name}</td>
          <td>{Item.email}</td>
          <td>{Item.ordered_items.product_name}</td>
          <td>{Item.ordered_items.quantity}</td>
          <td>₹{Item.ordered_items.total}</td>
          <td>{Item.order_status}</td>
        </tr>
            )) 
        )
        :null

      }
      </tbody>
    </Table>


    </div>
  );
};

export default Myorders;
