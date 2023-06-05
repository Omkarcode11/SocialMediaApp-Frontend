import React, { useEffect, useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import Notify from "../../components/nodify/Notify";
import usePostApi from "../../hooks/usePostApi";

export default function SignUp() {
  let navigate = useNavigate();
  const [showNote, setShowNote] = useState("none");
  const [notifyMsg, setNotifyMsg] = useState("Welcome");

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    phone: 0,
    email: "",
    password: "",
  });

  async function createUser() {
    user.name = user.firstName + " " + user.lastName;
    user.userName = user.firstName;
    user.email.toLowerCase();
    delete user.firstName;
    delete user.lastName;

    let data = await usePostApi("/auth/signup", user);

    user.email = "";
    user.firstName = "";
    user.lastName = "";
    user.password = "";
    user.phone = "";
    setNotifyMsg(data);
    setShowNote("block");
    setTimeout(() => {
      setShowNote("none");
    }, 2000);

    if (data == "Account Created Successfully") {
      navigate("/signin");
    }
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
    }, 2000);
  }, []);

  return (
    <div className="signUp-layout">
      <div className="go-to-login">
        <h2>Already have an Account?</h2>
        <p>Join to Freedom and Enjoy</p>
        <button onClick={() => navigate("/signin")} className="goToLoginBtn">
          login
        </button>
      </div>
      <div className="signUp-form-layout">
        <div className="title-subtitle-signUp">
          <h2 className="signUp-title">SignUp for New Account</h2>
          <p>
            Let's get you all set up so you can start creating your first Posts.
          </p>
        </div>
        <div className="signUp-form" onChange={(e) => userHandler(e)}>
          <div className="signUp-first-last-name">
            <div className="signUp-input">
              <label>First Name</label>
              <input
                required
                type="text"
                value={user.firstName}
                name="firstName"
              />
            </div>
            <div className="signUp-input">
              <label>Last Name</label>
              <input
                required
                type="text"
                value={user.lastName}
                name="lastName"
              />
            </div>
          </div>
          <div className="signUp-input">
            <label>Phone</label>
            <input required type="number" value={user.phone} name="phone" />
          </div>
          <div className="signUp-input">
            <label>Email</label>
            <input required type="email" value={user.email} name="email" />
          </div>
          <div className="signUp-input">
            <label>Password</label>
            <input
              required
              type="password"
              value={user.password}
              name="password"
            />
          </div>
          <button className="signUp-btn" onClick={() => createUser()}>
            Submit
          </button>
        </div>
        <Notify message={notifyMsg} color={"#f0fc05"} display={showNote} />
      </div>
    </div>
  );
}
