import React, { useEffect, useState } from "react";
import "./LikedWindow.css";
import { CgClose } from "react-icons/cg";
import usePostApi from "../../hooks/usePostApi";
import ShortProfile from "../shortProfile/ShortProfile";

function LikedWindow({ setShowLikeWindow, postLike, id }) {
  const [users, setUsers] = useState([]);

  async function getAllUserInfo() {
    let body = { ids: postLike };
    let headers = {
      headers: {
        authorization: "Brear " + localStorage.getItem("FreedomToken"),
      },
    };

    let data = await usePostApi(`/user/findAllIds/${id}`, body, headers);
    setUsers(data)
  }

  useEffect(()=>{
    getAllUserInfo()
  },[])

  return (
    <div className="likedWindowLayout">
      <h1 className="likeWindow-heading">Liked User</h1>
      <div
        className="likeWindow-close-btn"
        onClick={() => setShowLikeWindow(false)}
      >
        <CgClose />
      </div>
      {users?.map((user)=>
      <ShortProfile key={user._id}  firstName={user.firstName} lastName={user.lastName}/>
      )}
      
    </div>
  );
}

export default LikedWindow;
