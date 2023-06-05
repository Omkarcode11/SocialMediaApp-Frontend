import React, { useState } from "react";
import { BiCommentDetail } from "react-icons/bi";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import "./PostCard.css";

function PostCard() {
  const [like, setLike] = useState(false);
  return (
    <div className="postCard-layout">
      <div className="post-header">
        <div>
          <img src="/avatar.png" className="avatar-image" />
        </div>
        <div>
          <p className="full-name">User Name</p>
          <p className="short-name">UserId</p>
        </div>
      </div>
      <div className="post-caption">Captions</div>
      <div className="post-image">
        <img src="https://picsum.photos/4000" className="post-main-img" />
      </div>
      <div className="like-comment-icon">
        {like ? (
          <AiOutlineLike
            size={"2rem"}
            className="like-btn"
            color="#FEA1A1"
            onClick={() => setLike(!like)}
          />
        ) : (
          <AiFillLike
            size={"2rem"}
            className="like-btn"
            color="#FEA1A1"
            onClick={() => setLike(!like)}
          />
        )}
        <BiCommentDetail size={"2rem"} color="#FEA1A1" />
      </div>
    </div>
  );
}

export default PostCard;
