import React from 'react';
import {useParams} from 'react-router-dom'

function UserList() {

  const {id} = useParams();

  return <div>
    <h1>Istifadeci bilgileri</h1>
    id:{id}
  </div>;
}

export default UserList;
