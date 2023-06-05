import React, { useRef, useState } from "react";
import { AiFillSetting, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { CiSearch, CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  let [mode, setMode] = useState(true);
  let search = useRef("");
  let [showMenu, setShowMenu] = useState(true);

  const navigate = useNavigate()


  return (
    <div className="headerLayout">
      <div className="logo">
        {/* <img src='/logo.jpg' width={'100px'} alt='logo' /> */}
        <h1 className="title-logo" onClick={()=>navigate('/')}>Freedom</h1>
      </div>
      <div className="headers-utils">
        <div className="search-palate">
          <input placeholder="Search" ref={search} type="text" />
          <CiSearch
            size={"2rem"}
            onClick={() => console.log(search.current.value)}
          />
        </div>
        {mode ? (
          <CiLight size={"2rem"} onClick={() => setMode(!mode)} />
        ) : (
          <MdDarkMode size={"2rem"} onClick={() => setMode(!mode)} />
        )}
        <AiFillSetting size={"2rem"} />
        <RxAvatar size={"2rem"} />
      </div>
      <div className="menu" onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? (
          <AiOutlineMenu size={"2rem"} />
        ) : (
          <AiOutlineClose size={"2rem"} />
        )}
      </div>
      {!showMenu && (
        <div className="hamburger-menu">
          <div className="search-palate">
            <input placeholder="Search" ref={search} type="text" />
            <CiSearch
              size={"2rem"}
              onClick={() => console.log(search.current.value)}
            />
          </div>
          <div className="changeMode hamburger-icons" onClick={() => setMode(!mode)}>
            {mode ? (
              <CiLight size={"2rem"} textRendering="Light" />
            ) : (
              <MdDarkMode size={"2rem"} textRendering={"Dark"} />
            )}
            Change Mode
          </div>
          <div className="hamburger-icons">
            <AiFillSetting size={"2rem"} />
            Setting
          </div>
          <div className="hamburger-icons">
<RxAvatar size={"2rem"} />

 My Profile
            
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
