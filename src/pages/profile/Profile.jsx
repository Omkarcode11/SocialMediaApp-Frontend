import React from "react";
import "./Profile.css";
import CoverProfile from "../../components/coverProfile/CoverProfile";
import SelfInfo from "../../components/selfInfo/SelfInfo";
import MyPosts from "../../components/myPosts/MyPosts";
import FriendList from "../../components/friendLists/FriendList";
import Trending from "../../components/trending/Trending";

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
    <div className="myprofile-rightsection">
      <FriendList/>
      
      <Trending/>
      
    </div>
  </div>;
}

export default Profile;
