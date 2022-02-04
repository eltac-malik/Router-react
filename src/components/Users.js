import React from 'react';
import {useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Users() {

  const [user,setUser] =useState([]);

  useEffect(() =>
  {
    (
      axios("https://jsonplaceholder.typicode.com/users")
      .then(resp => setUser(resp.data))
    )
  },[])

  return <div>
      <h1>Users List</h1>
      <ul>
        {
          user.map((e,i) => (<li key={i}><Link to={`user/${user.id}`}>{e.name}</Link></li>))
        }
      </ul>
      </div>;
}

export default Users;
