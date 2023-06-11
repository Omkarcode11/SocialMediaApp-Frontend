import React, { useEffect, useRef, useState } from "react";
import "./UserPosts.css";
import PostCard from "../postCard/PostCard";
import { useSelector } from "react-redux";
import usePostApi from "../../hooks/usePostApi";
import { URL } from "../../utils/BaseUrl";
import Notify from "../nodify/Notify";
import useGetApi from "../../hooks/useGetApi";
import { useNavigate } from "react-router-dom";

function UserPosts() {
  const [show, setShow] = useState("none");
  const caption = useRef();
  const [img, setImg] = useState("");
  const { id,isAuthenticated  } = useSelector((state) => state.auth);
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate()

  function imageHandler(e) {
    setImg(e.target.files[0]);
  }

  async function createPost() {
    let file = img;
    const formData = new FormData();
    formData.append("photo", file);

    let token = "Bearer " + localStorage.getItem("FreedomToken");
    let data = await usePostApi(
      `/post/create/${id}?caption=${caption.current.value}`,
      formData,
      {
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    caption.current.value = "";
    if (data && data.msg) {
      setShow("block");
      setPosts([])
      loadPosts()

      setTimeout(() => {
        setShow("none");
      }, 2000);
    }
  }

  async function loadPosts() {
    let path = `/post/WholePosts?page=${page}`;

    let data = await useGetApi(path);
    setPosts((prev) => [...prev, ...data]);
  }




  useEffect(() => {
    if(isAuthenticated){

      loadPosts()
    }else{
      navigate('/signin')
    }
  }, [isAuthenticated]);

  return (
    <div className="userPosts-layout">
      <div className="create-post-layout">
        <h2 className="create-post-title">Create Post</h2>
        <div className="type-caption">
          <img src="/avatar.png" className="avatar-image" alt="avatar.png" />
          <input
            placeholder="Type Here"
            className="type-here"
            ref={caption}
            type="text"
          />
        </div>
        <div className="input-file">
          <div>
            <input
              type="file"
              id="file"
              accept="image/*"
              className="enter-image"
              onChange={(e) => imageHandler(e)}
            />
            <label for="file">
              <img src="/galary.png" className="galary-image" />
            </label>
          </div>
          <div>
            <button className="post-button" onClick={() => createPost()}>
              Post
            </button>
          </div>
        </div>
        <Notify
          message={"Post Created Successfully"}
          color={"lightgreen"}
          display={show}
        />
      </div>
    {posts.map((post)=>
      <PostCard key={post._id} caption={post.caption} photo={post.photo} id={post.userId} postLike={post.like} comments={post.comments} postId={post._id}  />
    )}
    </div>
  );
}

export default UserPosts;




