import React, { useEffect, useState } from "react";
import { BiCommentDetail } from "react-icons/bi";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import "./PostCard.css";
import useGetApi from "../../hooks/useGetApi";
import { URL } from "../../utils/BaseUrl";

function PostCard({ caption, photo, id, postLike, comments }) {
  const [like, setLike] = useState(false);
  const [user, setUser] = useState({ userName: "", userId: "" });

  async function getUserInfo() {
    let path = `/user/id/${id}`;
    let data = await useGetApi(path);
    setUser({
      userName: data.firstName[0].toUpperCase()+data.firstName.slice(1) + " " + data.lastName[0].toUpperCase()+data.lastName.slice(1),
      userId: data.firstName,
    });
  }
  useEffect(() => {
    if (photo) {
      getUserInfo();
    }
  }, []);

  return (
    <div className="postCard-layout">
      <div className="post-header">
        <div>
          <img src="/avatar.png" className="avatar-image" />
        </div>
        <div>
          <p className="full-name">{user.userName}</p>
          <p className="short-name">{user.userId}</p>
        </div>
      </div>
      <div className="post-caption">{caption}</div>
      <div className="post-image">
        <img src={`${URL}/post/files/${photo}`} className="post-main-img" />
      </div>
      <div className="like-comment-icon">
        <div>
          {postLike?.length}
          {like ? (
            <AiOutlineLike
              size={"2rem"}
              className="like-btn"
              color="#FEA1A1"
              onClick={() => setLike(!like)}
              textAnchor="1000"
            />
          ) : (
            <AiFillLike
              size={"2rem"}
              className="like-btn"
              color="#FEA1A1"
              onClick={() => setLike(!like)}
              textAnchor="1000"
            />
          )}
        </div>
        <div>
          {comments?.length}
          <BiCommentDetail size={"2rem"} color="#FEA1A1" />
        </div>
      </div>
    </div>
  );
}

export default PostCard;
