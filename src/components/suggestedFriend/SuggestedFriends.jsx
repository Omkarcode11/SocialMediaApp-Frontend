import React, { useState } from "react";
import "./SuggestedFriends.css";
import {BsPersonAdd} from 'react-icons/bs'
import {MdPersonRemoveAlt1} from 'react-icons/md'

function SuggestedFriends({ name, userId }) {
    const [friend,setFriend] = useState(false)
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
        <div className="accept-reject-icon" onClick={()=>setFriend(!friend)}>
            {!friend?
          <BsPersonAdd size={'2rem'} color="#FEA1A1"/>
          :
          <MdPersonRemoveAlt1 size={'2.2rem'} color="#FEA1A1"/>
        }
        </div>
    </div>
  );
}

export default SuggestedFriends;
