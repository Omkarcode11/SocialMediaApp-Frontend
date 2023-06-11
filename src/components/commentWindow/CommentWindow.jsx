import React, { useRef, useState } from "react";
import Comment from "../comment/Comment";
import { CgClose } from "react-icons/cg";
import "./CommentWindow.css";
import { useSelector } from "react-redux";
import usePutApi from "../../hooks/usePutApi copy";

function CommentWindow({ setShowCommentWindow, postId, comments }) {
  const [postComments, setPostComments] = useState(comments);

  const inputComment = useRef();
  const { firstName, lastName, id } = useSelector((state) => state.auth);

  async function commentHandler() {
    debugger;
    let newComment = inputComment.current.value;
    let name = `${firstName[0].toUpperCase() + firstName.slice(1)} ${
      lastName[0].toUpperCase() + lastName.slice(1)
    }`;
    let body = {
      comment: { name: name, body: newComment },
      postId: postId,
      userId: id,
    };
    let headers = {
      headers: {
        authorization: "Brear " + localStorage.getItem("FreedomToken"),
      },
    };

    let data = await usePutApi("/post/comment", body, headers);

    if (data == "post Successfully") {
      setPostComments([...postComments, body.comment]);
    }
  }

  console.log(postComments)

  return (
    <div className="likedWindowLayout">
      <h1 className="likeWindow-heading">Comments</h1>
      <div
        className="likeWindow-close-btn"
        onClick={() => setShowCommentWindow(false)}
      >
        <CgClose />
      </div>
      {postComments?.map((user) => (
        <Comment name={user.name} comment={user.body} />
      ))}

      <div className="post-comment">
        <input
          className="comment-post comment-input"
          ref={inputComment}
          type="text"
          placeholder="Enter Your new Comment here"
        />
        <button
          className="comment-post comment-post-btn"
          onClick={() => commentHandler()}
        >
          Post
        </button>
      </div>
    </div>
  );
}

export default CommentWindow;
