import React from "react";
import "./Profile.css";
import CoverProfile from "../../components/coverProfile/CoverProfile";
import SelfInfo from "../../components/selfInfo/SelfInfo";
import MyPosts from "../../components/myPosts/MyPosts";
import FriendList from "../../components/friendLists/FriendList";

function Profile() {
  return <div className="profile-layout">
    <div className="profile-all-info">
      <div>
      <CoverProfile/>
      </div>
      <div className="info-posts">
        <SelfInfo/>
        <MyPosts/>
      </div>
    </div>
    <div>
      <FriendList/>
    </div>
  </div>;
}

export default Profile;
