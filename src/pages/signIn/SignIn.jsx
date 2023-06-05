import React, { useEffect, useState } from "react";
import "./SignIn.css";
import Notify from "../../components/nodify/Notify";
import { useNavigate } from "react-router-dom";
import usePostApi from "../../hooks/usePostApi";

function SignIn() {
  const navigate = useNavigate();
  const [showNote, setShowNote] = useState("none");
  const [notifyMsg, setNotifyMsg] = useState("Welcome");

  const [user, setUser] = useState({
    detail: "",
    password: "",
  });

  async function loginUser() {
    let data = await usePostApi("/auth/signin", user);
    console.log(data);
    user.detail = "";
    user.password = "";

    if (data.token) {
      setNotifyMsg("Login Successfully");
    } else {
      setNotifyMsg(data);
    }

    setShowNote("block");
    setTimeout(() => {
      setShowNote("none");
      if (data.token) {
        localStorage.setItem("FreedomToken", data.token);
        navigate("/home");
      }
    }, 1000);
  }

  function userHandler(e) {
    let name = e.target.name;
    let value = e.target.value;
    setUser((user) => ({ ...user, [name]: value }));
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
        <div className="signIn-form" onChange={(e) => userHandler(e)}>
          <div className="signIn-input">
            <label>Phone / Email / User Name</label>
            <input required type="text" value={user.detail} name="detail" />
          </div>
          <div className="signIn-input">
            <label>Password</label>
            <input
              required
              type="password"
              value={user.password}
              name="password"
            />
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
