import React, { useEffect, useState } from "react";
import PostCard from "../postCard/PostCard";
import useGetApi from "../../hooks/useGetApi";
import { useSelector } from "react-redux";

function MyPosts() {
  const [myPosts, setMyPosts] = useState([]);
  const { id } = useSelector((state) => state.auth);

  async function getMyPosts() {
    let data = await useGetApi(`/post/get/user/${id}`);
    console.log(data);
    setMyPosts(data);
  }

  console.log(myPosts);

  useEffect(() => {
    getMyPosts();
  }, []);

  return (
    <div>
      {myPosts?.map((posts) => (
        <PostCard
          key={posts._id}
          photo={posts.photo}
          caption={posts.caption}
          id={posts.userId}
          comments={posts.comments}
          postLike={posts.like}
        />
      ))}
    </div>
  );
}

export default MyPosts;
