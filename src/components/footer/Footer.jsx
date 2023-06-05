import React from "react";
import "./Footer.css";
import { AiFillHome } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { BiTrendingUp } from "react-icons/bi";
import { MdAccountCircle } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function Footer() {
  const navigate = useNavigate()
  return (
    <div className="footer-layout">
      <AiFillHome size={"2rem"} color="#FEA1A1" onClick={()=>navigate('/')} />
      <BiTrendingUp size={"2rem"} color="#FEA1A1" onClick={()=>navigate('/trendingTags')} />
      <BsSearch size={"2rem"} color="#FEA1A1" onClick={()=>navigate('/search')} />
      <FaUserFriends size={"2rem"} color="#FEA1A1" onClick={()=>navigate('/friends')} />
      <MdAccountCircle size={"2rem"} color="#FEA1A1" onClick={()=>
        navigate('/profile/:id')
        } />
    </div>
  );
}

export default Footer;
