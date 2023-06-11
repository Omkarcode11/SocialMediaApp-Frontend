import React from "react";
import './Comment.css'

function Comment({ avatar, name, comment }) {
  return (
    <div className="comment-layout">
        <div className="profile-name">
      <div>
        <img
          src={avatar ? `${URL}/${avatar}` : "/avatar.png"}
          className="avatar-image"
          />
      </div>
      <div>
        <h3>{name}</h3>
      </div>
    </div>
      <h2 className="comment">{comment}</h2>
        </div>
  );
}

export default Comment;
