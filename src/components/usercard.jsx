// write the component code here
import React from 'react'

const UserCard=()=>{
    const userData={
        profilePhoto:'',
        name:'Yohan',
        email:'hello123@yahoo.com',
        phoneNumber:'9465287630',
        address:'H.no:1234'
    }
    return(
        <div className="card">
            <img src={userData.profilePhoto} alt="profile photo"/>
            <h2>{userData.name}</h2>
            <p>Email:{userData.email}</p>
            <p>Phone number:{userData.phoneNumber}</p>
            <p>Address:{userData.address}</p>
        </div>
    );
};

export default UserCard;