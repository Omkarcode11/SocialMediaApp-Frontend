import React, { useEffect, useState } from "react";
import { BiCommentDetail } from "react-icons/bi";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import "./PostCard.css";
import useGetApi from "../../hooks/useGetApi";
import { URL } from "../../utils/BaseUrl";
import usePutApi from "../../hooks/usePutApi copy";
import LikedWindow from "../likedWindow/LikedWindow";
import CommentWindow from "../commentWindow/CommentWindow";

function PostCard({ caption, photo, id, postLike, comments, postId }) {
  let bool = postLike.includes(id) ? false : true;
  const [like, setLike] = useState(bool);
  const [likeCountUser, setLikeCountUser] = useState(postLike);
  const [user, setUser] = useState({ userName: "", userId: "" });
  const [showLikeWindow, setShowLikeWindow] = useState(false);
  const [showCommentWindow, setShowCommentWindow] = useState(false);

  async function getUserInfo() {
    let path = `/user/id/${id}`;
    let data = await useGetApi(path);
    setUser({
      userName:
        data.firstName[0].toUpperCase() +
        data.firstName.slice(1) +
        " " +
        data.lastName[0].toUpperCase() +
        data.lastName.slice(1),
      userId: data.firstName,
    });
  }

  async function postLikeHandler(str) {
    let data;
    if (str == "like") {
      let body = { postId: postId, userId: id };
      data = await usePutApi("/post/like", body, {
        headers: {
          authorization: "Breare " + localStorage.getItem("FreedomToken"),
        },
      });
      if (data >= 1) {
        // postLike.push(id);
        setLikeCountUser((prev) => [...prev, id]);
        // setLikeCount(likeCount+1)
        setLike(false);
      }
    } else {
      let body = { postId: postId, userId: id };
      data = await usePutApi("/post/dislike", body, {
        headers: {
          authorization: "Breare " + localStorage.getItem("FreedomToken"),
        },
      });

      if (data >= 0) {
        let index = likeCountUser.indexOf(id);
        let newLike = new Array(likeCountUser);
        newLike.splice(index, 1);
        setLikeCountUser(newLike);
        setLike(true);
      }
    }
  }

  useEffect(() => {
    if (photo) {
      getUserInfo();
    }
  }, []);

  return (
    <div className="postCard-layout" onClick={() => console.log(postId)}>
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
        <div
          className="align-start"
          onClick={() => setShowLikeWindow(!showLikeWindow)}
        >
          {likeCountUser.length} people like...
        </div>
      </div>
      <div className="like-comment-icon">
        <div>
          {like ? (
            <AiOutlineLike
              size={"2rem"}
              className="like-btn"
              color="#FEA1A1"
              onClick={() => postLikeHandler("like")}
            />
          ) : (
            <AiFillLike
              size={"2rem"}
              className="like-btn"
              color="#FEA1A1"
              onClick={() => postLikeHandler("dislike")}
              textAnchor="1000"
            />
          )}
        </div>
        <div>
          <BiCommentDetail
            size={"2rem"}
            color="#FEA1A1"
            onClick={() => setShowCommentWindow(true)}
          />
        </div>
      </div>
      {showLikeWindow && (
        <LikedWindow
          setShowLikeWindow={setShowLikeWindow}
          postLike={likeCountUser}
          id={id}
        />
      )}
      {showCommentWindow && (
        <CommentWindow
          setShowCommentWindow={setShowCommentWindow}
          comments={comments}
          id={id}
          postId={postId}
        />
      )}
    </div>
  );
}

export default PostCard;
