import React from "react";
import './CoverProfile.css'

function CoverProfile() {
  return <div className="cover-profile-layout">
    <div className="cover-photo">
    <img src="https://picsum.photos/4000/500" className="cover-photo"/>
    <div className="profile-name-photo">
    <img src="/public/avatar.png" className="profile-photo"  />
     <div>
        <h2 className="user-name">User Name</h2>
        <p className="userId-name">UserId</p>
        <p className="profession">Profession</p>
        <p className="friends-count"><span className="counts-fr">203</span> Friends</p>
     </div>
    </div>
    </div>
  </div>;
}

export default CoverProfile;
