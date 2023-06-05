import React, { useEffect, useState } from "react";
import "./Friends.css";
import FriendsBox from "../friendsBox/FriendRequestBox";
import SuggestedFriends from "../suggestedFriend/SuggestedFriends";
import { currentUrl } from "../../utils/BaseUrl";

function Friends() {
  let [showClass, setShowClass] = useState("");


  useEffect(() => {
    if (window.location.href === `${currentUrl}/friends`) {
      setShowClass("trending-tags-sections");
    }
  }, [window.location.href]);

  return <div className={showClass}>
    <h1>Friend Requests</h1>
    <FriendsBox title={"Friends Request"} name={'omkar'} userId={'om'}/>
    <FriendsBox title={"Friends Request"} name={'omkar'} userId={'om'}/>
    <FriendsBox title={"Friends Request"} name={'omkar'} userId={'om'}/>
    <h1>Discover Friends</h1>
    <SuggestedFriends name='jayesh' userId='jay'/>
    <SuggestedFriends name='jayesh' userId='jay'/>
    <SuggestedFriends name='jayesh' userId='jay'/>
    <SuggestedFriends name='jayesh' userId='jay'/>
    <SuggestedFriends name='jayesh' userId='jay'/>
    <SuggestedFriends name='jayesh' userId='jay'/>
  </div>;

}

export default Friends;
