import React, { useEffect, useState } from "react";
import "./Friends.css";
import FriendsBox from "../friendsBox/FriendRequestBox";
import SuggestedFriends from "../suggestedFriend/SuggestedFriends";
import { currentUrl } from "../../utils/BaseUrl";
import useGetApi from "../../hooks/useGetApi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Friends() {
  let [showClass, setShowClass] = useState("");
  let [notFriendData, setNotFriendData] = useState([]);
  let [sendedRequests, setSendedRequests] = useState([]);
  let [friendRequest, setFriendRequest] = useState([]);
  let { id ,isAuthenticated} = useSelector((state) => state.auth);
  let navigate = useNavigate()

  async function gettingNotFriendUser() {
    let data = await useGetApi(`/user/notMyFriends/${id}`, {
      headers: {
        Authorization: "Berar " + localStorage.getItem("FreedomToken"),
      },
    });
    setNotFriendData(data);
  }

  async function getSendedRequests() {
    let data = await useGetApi(`/user/sendedFriendRequests/${id}`, {
      headers: {
        Authorization: "Berar " + localStorage.getItem("FreedomToken"),
      },
    });
    setSendedRequests(data);
  }



  async function getFriendRequests() {
    let data = await useGetApi(`/user/friendRequests/${id}`, {
      headers: {
        Authorization: "Berar " + localStorage.getItem("FreedomToken"),
      },
    });
    setFriendRequest(data);
  }

  console.log(friendRequest);

  useEffect(() => {
    if (window.location.href === `${currentUrl}/friends`) {
      setShowClass("trending-tags-sections");
    }
  }, [window.location.href]);

  useEffect(() => {
    if(isAuthenticated){

      gettingNotFriendUser();
      getSendedRequests();
      getFriendRequests();
    }else{
      navigate('/signin')
    }
  }, [isAuthenticated]);

  return (
    <div className={showClass}>
      <h1>Friend Requests</h1>
      {friendRequest?.map((user)=>
      <FriendsBox title={"Friends Request"} name={user.firstName[0].toUpperCase()+user.firstName.slice(1)+" "+user.lastName[0].toUpperCase()+user.lastName.slice(1)} userId={user.firstName[0].toUpperCase()+user.firstName.slice(1)} />
      )}
      <h1>Sended Requests</h1>
      {sendedRequests?.map((user) => (
        <SuggestedFriends
          key={user._id}
          name={
            user.firstName[0].toUpperCase() +
            user.firstName.slice(1) +
            " " +
            user.lastName[0].toUpperCase() +
            user.lastName.slice(1)
          }
          userId={user.firstName}
        />
      ))}
      <h1>Discover Friends</h1>
      {notFriendData?.map((user) => (
        <SuggestedFriends
          key={user._id}
          name={
            user.firstName[0].toUpperCase() +
            user.firstName.slice(1) +
            " " +
            user.lastName[0].toUpperCase() +
            user.lastName.slice(1)
          }
          userId={user.firstName}
        />
      ))}
    </div>
  );
}

export default Friends;
