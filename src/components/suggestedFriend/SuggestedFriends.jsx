import React, { useState } from "react";
import "./SuggestedFriends.css";
import { BsPersonAdd } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import usePatchApi from "../../hooks/usePatchApi";
import { sendFriendReq } from "../../store/authSlice";

function SuggestedFriends({ name, userId, frId }) {
  const { id } = useSelector((state) => state.auth);
  const dispatcher = useDispatch();

  async function sendFriendRequest() {
    let headers = {
      headers: {
        authorization: "Brear " + localStorage.getItem("FreedomToken"),
      },
    };
    let body = {
      userId: id,
      friendId: frId,
    };

    let data = await usePatchApi("/user/sendFriendRequest", body, headers);
    if (data) {
      dispatcher(sendFriendReq(frId));
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
        <BsPersonAdd
          size={"2rem"}
          color="#FEA1A1"
          onClick={() => sendFriendRequest()}
        />
      </div>
    </div>
  );
}

export default SuggestedFriends;
