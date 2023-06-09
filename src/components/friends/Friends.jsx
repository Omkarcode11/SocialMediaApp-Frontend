import React, { useEffect, useState } from "react";
import "./Friends.css";
import FriendsBox from "../friendsBox/FriendRequestBox";
import SuggestedFriends from "../suggestedFriend/SuggestedFriends";
import { currentUrl } from "../../utils/BaseUrl";
import useGetApi from "../../hooks/useGetApi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import usePostApi from "../../hooks/usePostApi";
import SendedFriendReq from "../sendedFriendReq/SendedFriendReq";
import MyFriends from "../myFriends/MyFriends";

function Friends() {
  let [showClass, setShowClass] = useState("");
  let [notFriendData, setNotFriendData] = useState([]);
  let [sendedRequests, setSendedRequests] = useState([]);
  let [myFriends, setMyFriends] = useState([]);
  let [friendRequest, setFriendRequest] = useState([]);
  let { id, isAuthenticated, friendRequests, sendFriendReq, friends } =
    useSelector((state) => state.auth);
  let navigate = useNavigate();

  async function gettingNotFriendUser() {
    let arrayIds = [id, ...friendRequests, ...sendFriendReq, ...friends];
    let data = await usePostApi(
      `/user/notMyFriends`,
      { userId: id, ids: arrayIds },
      {
        headers: {
          Authorization: "Berar " + localStorage.getItem("FreedomToken"),
        },
      }
    );
    setNotFriendData(data);
  }

  async function getSendedRequests() {
    if (sendFriendReq.length == 0) {
      setSendedRequests([]);
    }
    try {
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
    } catch (err) {
      console.log(err);
    }
  }
  async function getFriendRequests() {
    if(friendRequests.length==0){
    setFriendRequest([])
    }
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

  async function getMyFriends() {
    if (friends.length == 0) {
      setMyFriends([]);
    }
    try {
      let data = await usePostApi(
        `/user/findAllIds/${id}`,
        { ids: friends },
        {
          headers: {
            Authorization: "Berar " + localStorage.getItem("FreedomToken"),
          },
        }
      );
      setMyFriends(data);
    } catch (err) {
      console.log(err);
    }
  }

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
      getMyFriends();
    } else {
      navigate("/signin");
    }
  }, [isAuthenticated, friendRequests, sendFriendReq, friends]);

  return (
    <div className={showClass}>
      <h1>Friend Requests</h1>
      {friendRequest?.map((user) => (
        <FriendsBox
          key={user._id}
          title={"Friends Request"}
          name={
            user.firstName[0].toUpperCase() +
            user.firstName.slice(1) +
            " " +
            user.lastName[0].toUpperCase() +
            user.lastName.slice(1)
          }
          frId={user._id}
          userId={user.firstName[0].toUpperCase() + user.firstName.slice(1)}
        />
      ))}
      <h1>Sended Requests</h1>
      {sendedRequests?.map((user) => (
        <SendedFriendReq
          key={user._id}
          frId={user._id}
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
      <h1>My Friends</h1>
      {myFriends?.map((user) => (
        <MyFriends
          frId={user._id}
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
          frId={user._id}
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
