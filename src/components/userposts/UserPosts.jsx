import React from "react";
import "./UserPosts.css";
import PostCard from "../postCard/PostCard";

function UserPosts() {
  return (
    <div className="userPosts-layout">
      <div className="create-post-layout">
        <h2 className="create-post-title">Create Post</h2>
        <div className="type-caption">
          <img src="/avatar.png" className="avatar-image" alt="avatar.png" />
          <input placeholder="Type Here" className="type-here" type="text" />
        </div>
        <div className="input-file">
            <div>
          <input
            type="file"
            id="file"
            accept="image/*"
            className="enter-image"
            />
          <label for="file">
            <img src="/galary.png" className="galary-image" />
          </label>
            </div>
          <div>
            <button className="post-button">Post</button>
          </div>
        </div>

      </div>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
    </div>
  );
}

export default UserPosts;
