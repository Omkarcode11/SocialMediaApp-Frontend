import React from "react";
import "./MyFriends.css";

import { MdPersonRemoveAlt1 } from "react-icons/md";
import { removeFriend } from "../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import usePutApi from "../../hooks/usePutApi";

function MyFriends({ name, userId, frId }) {
  const { id } = useSelector((state) => state.auth);
  let dispatcher = useDispatch();

  async function removeFri() {
    debugger
    let headers = {
      headers: {
        authorization: "Brear " + localStorage.getItem("FreedomToken"),
      },
    };
    let body = {
      userId: id,
      friendId: frId,
    };

    let data = await usePutApi("/user/removeFriend", body, headers);
    if (data) {
      dispatcher(removeFriend(frId));
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
          onClick={() => removeFri()}
        />
      </div>
    </div>
  );
}

export default MyFriends;
