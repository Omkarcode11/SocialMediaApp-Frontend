import React, { useEffect, useState } from "react";
import PostCard from "../postCard/PostCard";
import useGetApi from "../../hooks/useGetApi";
import { useSelector } from "react-redux";

function MyPosts() {
  const [myPosts, setMyPosts] = useState([]);
  const { id } = useSelector((state) => state.auth);

  async function getMyPosts() {
    let data = await useGetApi(`/post/get/user/${id}`);
    setMyPosts(data);
  }


  useEffect(() => {
    getMyPosts();
  }, []);

  return (
    <div>
      {myPosts?.map((posts) => (
        <PostCard
          key={posts._id}
          caption={posts.caption}
          photo={posts.photo}
          id={posts.userId}
          postLike={posts.like}
          comments={posts.comments}
          postId ={posts._id}
        />
      ))}
    </div>
  );
}

export default MyPosts;
