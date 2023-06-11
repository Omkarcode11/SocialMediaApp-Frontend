import React, { useState } from "react";
import "./Trending.css";
import TrendingCard from "../trendingCards/TrendingCard";
import { useEffect } from "react";
import { currentUrl } from "../../utils/BaseUrl";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Trending() {
  let [showClass, setShowClass] = useState("");
  const {isAuthenticated} = useSelector((state)=>state.auth)
  const navigate = useNavigate()

  useEffect(()=>{
   if(!isAuthenticated){
    navigate('/signin')
   }
  },[isAuthenticated])


  useEffect(() => {
    if (window.location.href === `${currentUrl}/trendingTags`) {
      setShowClass("trending-tags-sections");
    }
  }, [window.location.href]);



  return (
    <div className={showClass}>
      <TrendingCard
        title="Most Trending"
        tags={["#kisan", "#justice", "#india", "#modi", "#bjp"]}
      />
      <TrendingCard
        title="Most Trending Politics Tags"
        tags={["#kisan", "#justice", "#india", "#modi", "#bjp"]}
      />
    </div>
  );
}

export default Trending;
