import React, { useEffect, useRef, useState } from "react";
import "./SignIn.css";
import Notify from "../../components/nodify/Notify";
import { useNavigate } from "react-router-dom";
import usePostApi from "../../hooks/usePostApi";
import { useDispatch } from "react-redux";
import { addUser, changeAuthentication } from "../../store/authSlice";

function SignIn() {
  const navigate = useNavigate();
  const detail = useRef();
  const password = useRef();
  const [showNote, setShowNote] = useState("none");
  const [notifyMsg, setNotifyMsg] = useState("Welcome");
  const dispatcher = useDispatch();


  async function loginUser() {
    let obj = {
      detail: detail?.current?.value,
      password: password?.current?.value,
    };
    let data = await usePostApi("/auth/signin", obj);



    if (data.token) {
      setNotifyMsg("Login Successfully");
      dispatcher(addUser(data?.user));
      dispatcher(changeAuthentication(true));
    } else {
      setNotifyMsg(data);
    }

    setShowNote("block");
    setTimeout(() => {
      setShowNote("none");
      if (data.token) {
        localStorage.removeItem("FreedomToken");
        localStorage.setItem("FreedomToken", data.token);
        navigate("/");
      }
    }, 1000);
  }

  useEffect(() => {
    setShowNote("block");
    setTimeout(() => {
      setShowNote("none");
    }, 1000);
  }, []);

  return (
    <div className="signIn-layout">
      <div className="go-to-login">
        <h2>Not have an Account?</h2>
        <p>Join to Freedom and Enjoy</p>
        <button onClick={() => navigate("/signup")} className="goToLoginBtn">
          Signup
        </button>
      </div>
      <div className="signIn-form-layout">
        <div className="title-subtitle-signIn">
          <h2 className="signIn-title">Login for Freedom</h2>
          <p>
            Let's get you all set up so you can start creating your first Posts.
          </p>
        </div>
        <div className="signIn-form">
          <div className="signIn-input">
            <label>Phone / Email </label>
            <input required type="text" ref={detail} name="detail" />
          </div>
          <div className="signIn-input">
            <label>Password</label>
            <input required type="password" ref={password} name="password" />
          </div>
          <button className="signIn-btn" onClick={() => loginUser()}>
            Login
          </button>
        </div>
        <Notify message={notifyMsg} color={"#f0fc05"} display={showNote} />
      </div>
    </div>
  );
}

export default SignIn;

//   {
//     user: {
//       _id: '647f431067079d783ada0339',
//       firstName: 'arya',
//       lastName: 'sonawane',
//       email: 'arya123@gmail.com',
//       password: '$2b$10$gXkHRpBPmhmCW/PP4QMvSOPYd8yTCRDG5h2fgmc7BHFzjFK/Htgnq',
//       phone: 8425062252,
//       myPosts: [],
//       myFriends: [],
//       friendReq: [],
//       sendFriendReq: [],
//       likedPosts: [],
//       createdAt: '2023-06-06T14:30:40.272Z',
//       __v: 0
//     },
//     token:
//       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXRhaWwiOiJhcnlhMTIzQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiQXJ5YUAxMjMiLCJ0eXBlIjoiZW1haWwiLCJpYXQiOjE2ODYwNjI0MDAsImV4cCI6MTY4NjA2NjAwMH0.t18PRoFPm-14s6-I3k8u7UGe6ZjdUtiA0Ou0DCMMl94'
//   }
// let data: any
