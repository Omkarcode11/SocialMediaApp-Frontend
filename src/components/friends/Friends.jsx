import React, { useEffect, useState } from "react";
import "./Friends.css";
import FriendsBox from "../friendsBox/FriendRequestBox";
import SuggestedFriends from "../suggestedFriend/SuggestedFriends";
import { currentUrl } from "../../utils/BaseUrl";
import useGetApi from "../../hooks/useGetApi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import usePostApi from "../../hooks/usePostApi";

function Friends() {
  let [showClass, setShowClass] = useState("");
  let [notFriendData, setNotFriendData] = useState([]);
  let [sendedRequests, setSendedRequests] = useState([]);
  let [friendRequest, setFriendRequest] = useState([]);
  let { id, isAuthenticated, friendRequests, sendFriendReq,friends } = useSelector(
    (state) => state.auth
  );
  let navigate = useNavigate();

  async function gettingNotFriendUser() {
    let arrayIds = [id,...friendRequests,...sendFriendReq,...friends]
    let data = await usePostApi(`/user/notMyFriends`,{userId : id,ids: arrayIds } ,{
      headers: {
        Authorization: "Berar " + localStorage.getItem("FreedomToken"),
      },
    });
    setNotFriendData(data);
  }

  async function getSendedRequests() {
    let data = await usePostApi(
      `/user/findAllIds/${id}`,
      { ids: sendFriendReq },
      {
        headers: {
          Authorization: "Berar " + localStorage.getItem("FreedomToken"),
        },
      }
    );
    setSendedRequests(data);
  }
  async function getFriendRequests() {
    let data = await usePostApi(
      `/user/findAllIds/${id}`,
      { ids: friendRequests },
      {
        headers: {
          Authorization: "Berar " + localStorage.getItem("FreedomToken"),
        },
      }
    );
    console.log(data);
    setFriendRequest(data);
  }

  console.log(friendRequest);

  useEffect(() => {
    if (window.location.href === `${currentUrl}/friends`) {
      setShowClass("trending-tags-sections");
    }
  }, [window.location.href]);

  useEffect(() => {
    if (isAuthenticated) {
      gettingNotFriendUser();
      getSendedRequests();
      getFriendRequests();
    } else {
      navigate("/signin");
    }
  }, [isAuthenticated]);

  return (
    <div className={showClass}>
      <h1>Friend Requests</h1>
      {friendRequest?.map((user) => (
        <FriendsBox
          title={"Friends Request"}
          name={
            user.firstName[0].toUpperCase() +
            user.firstName.slice(1) +
            " " +
            user.lastName[0].toUpperCase() +
            user.lastName.slice(1)
          }
          userId={user.firstName[0].toUpperCase() + user.firstName.slice(1)}
        />
      ))}
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
