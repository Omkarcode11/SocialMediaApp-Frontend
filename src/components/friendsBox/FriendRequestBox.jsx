import React from "react";
import "./FriendRequestBox.css";
import {TiTick} from 'react-icons/ti'
import {VscChromeClose} from 'react-icons/vsc'

function FriendRequestBox({ name, userId }) {
  return (
   
      <div className="user-profile-short">
        <div>
          <img src="/avatar.png" className="avatar-image" />
        </div>
        <div>
          <p className="full-name" >
            {name}
          </p>
          <p className="short-name" >
            {userId}
          </p>
        </div>
        <div className="accept-reject-icon">
          <TiTick size={'2rem'} color="#FEA1A1"/>
          <VscChromeClose size={'1.5rem' } color='gray'/>
        </div>
    </div>
  );
}

export default FriendRequestBox;
