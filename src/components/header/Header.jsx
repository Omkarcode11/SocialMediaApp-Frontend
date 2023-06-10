import React, { useRef, useState } from "react";
import { AiFillSetting, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { CiSearch, CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  let [mode, setMode] = useState(true);
  let search = useRef("");
  let {firstName,avatar,id}=useSelector((state)=>state.auth)


  const navigate = useNavigate();

  return (
    <div className="headerLayout">
      <div className="logo">
        {/* <img src='/logo.jpg' width={'100px'} alt='logo' /> */}
        <h1
          className="title-logo"
          style={{ marginLeft: "1rem" }}
          onClick={() => navigate("/")}
        >
          Freedom
        </h1>
      </div>
      <div className="headers-utils">
        <div className="search-palate">
          <input placeholder="Search" ref={search} type="text" />
          <CiSearch size={"2rem"} onClick={() => navigate("/search")} />
        </div>
        {mode ? (
          <CiLight size={"2rem"} onClick={() => setMode(!mode)} />
        ) : (
          <MdDarkMode size={"2rem"} onClick={() => setMode(!mode)} />
        )}
        <AiFillSetting size={"2rem"} />
       <div  onClick={() => navigate(`/profile/${id}`)}>
      {avatar ? <img src="avatar" /> : firstName ? <h3 className="firstName">{firstName[0].toUpperCase()+firstName.slice(1)}</h3>:
        <RxAvatar
        size={"2rem"}
        style={{ marginRight: "1rem" }}
        />
      }
          </div>
      </div>

      <div className="menu">
        {mode ? (
          <CiLight size={"2rem"} onClick={() => setMode(!mode)} />
        ) : (
          <MdDarkMode size={"2rem"} onClick={() => setMode(!mode)} />
        )}
        <AiFillSetting size={"2rem"} style={{ marginRight: "1rem" }} />
      </div>
    </div>
  );
}

export default Header;
