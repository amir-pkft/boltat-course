import React from 'react';
import './usercard.css';

const UserSelfCard = ({ user }) => {
  console.log(user);
  return (
  
  <div className="bord">
       
       <img src={user.image} className="img1"/>
       <h1 className="name">{user.name}</h1>
       <h2 className="familyname">{user.surName}</h2>
       <b className="jensiat">male.43</b>

  </div>
  )
};
export default UserSelfCard;
