import React, { useEffect } from "react";
import "./Profile.css";
import CoverProfile from "../../components/coverProfile/CoverProfile";
import SelfInfo from "../../components/selfInfo/SelfInfo";
import MyPosts from "../../components/myPosts/MyPosts";
import FriendList from "../../components/friendLists/FriendList";
import Trending from "../../components/trending/Trending";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Profile() {

  const {isAuthenticated} = useSelector((state)=>state.auth)
  const navigate = useNavigate()


  useEffect(()=>{
   if(!isAuthenticated){
    navigate('/signin')
   }
  },[isAuthenticated])





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
    <div className="my-profile-right-section">
      <FriendList/>
      <Trending/>
    </div>
  </div>;
}

export default Profile;
