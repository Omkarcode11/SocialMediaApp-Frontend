import React from "react";
import './CoverProfile.css'
import { useSelector } from "react-redux";

function CoverProfile() {

  const {firstName , lastName,work,friends} = useSelector((state)=>state.auth)



  return <div className="cover-profile-layout">
    <div className="cover-photo">
    <img src="https://picsum.photos/4000/500" className="cover-photo"/>
    <div className="profile-name-photo">
    <img src="/public/avatar.png" className="profile-photo"  />
     <div>
        <h2 className="user-name">{firstName[0].toUpperCase()+firstName.slice(1) + " " + lastName[0].toUpperCase()+lastName.slice(1)}</h2>
        <p className="userId-name">{firstName}</p>
        <p className="profession">{work ? work : "Not Set"}</p>
        <p className="friends-count"><span className="counts-fr">{friends.length}</span> Friends</p>
     </div>
    </div>
    </div>
  </div>;
}

export default CoverProfile;
