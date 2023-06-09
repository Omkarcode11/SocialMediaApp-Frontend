import React, { useState } from "react";
import "./SendedFriendReq.css";

import { MdPersonRemoveAlt1 } from "react-icons/md";
import usePatchApi from "../../hooks/usePatchApi";
import { revokeRequest } from "../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";

function SendedFriendReq({ name, userId, frId }) {
  const { id } = useSelector((state) => state.auth);
  let dispatcher = useDispatch();

  async function unSendFriendRequest() {
    let headers = {
      headers: {
        authorization: "Brear " + localStorage.getItem("FreedomToken"),
      },
    };
    let body = {
      userId: id,
      friendId: frId,
    };

    let data = await usePatchApi("/user/revokeRequest", body, headers);
    if (data) {
      dispatcher(revokeRequest(frId));
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
          <MdPersonRemoveAlt1
            size={"2.2rem"}
            color="#FEA1A1"
            onClick={() => unSendFriendRequest()}
          />
        
      </div>
    </div>
  );
}

export default SendedFriendReq;
