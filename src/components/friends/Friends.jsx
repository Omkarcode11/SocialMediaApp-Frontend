import React from "react";
import "./Friends.css";
import FriendsBox from "../friendsBox/FriendRequestBox";
import SuggestedFriends from "../suggestedFriend/SuggestedFriends";

function Friends() {
  return <div>
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
