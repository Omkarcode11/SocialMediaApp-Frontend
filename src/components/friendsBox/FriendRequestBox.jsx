import React from "react";
import "./FriendRequestBox.css";
import { TiTick } from "react-icons/ti";
import { VscChromeClose } from "react-icons/vsc";
import { acceptFriendReq, rejectFriendRequest } from "../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import usePutApi from "../../hooks/usePutApi";

function FriendRequestBox({ name, userId, frId }) {
  const { id } = useSelector((state) => state.auth);
  const dispatcher = useDispatch();

  async function acceptFriendRequest() {
    debugger;
    let headers = {
      headers: {
        authorization: "Brear " + localStorage.getItem("FreedomToken"),
      },
    };
    let body = {
      userId: id,
      friendId: frId,
    };

    let data = await usePutApi("/user/acceptRequest", body, headers);
    if (data) {
      dispatcher(acceptFriendReq(frId));
    }
  }

  async function rejectFriendReq() {
    debugger;
    let headers = {
      headers: {
        authorization: "Brear " + localStorage.getItem("FreedomToken"),
      },
    };
    let body = {
      userId: id,
      friendId: frId,
    };

    let data = await usePutApi("/user/rejectRequest", body, headers);
    if (data) {
      dispatcher(rejectFriendRequest(frId));
    }
  }

  return (
    <div className="user-profile-short">
      <div>
        <img src="/avatar.png" className="avatar-image" />
      </div>
      <div>
        <p className="full-name">{name}</p>
        <p className="short-name">{userId}</p>
      </div>
      <div className="accept-reject-icon">
        <TiTick
          size={"2rem"}
          color="#FEA1A1"
          onClick={() => acceptFriendRequest()}
        />
        <VscChromeClose size={"1.5rem"} color="gray" onClick={()=>rejectFriendReq()}  />
      </div>
    </div>
  );
}

export default FriendRequestBox;
