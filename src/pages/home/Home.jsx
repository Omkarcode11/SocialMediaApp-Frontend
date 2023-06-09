import React, { useEffect, useState } from 'react'
import './Home.css'
import Trending from '../../components/trending/Trending'
import UserPosts from '../../components/userposts/UserPosts'
import Friends from '../../components/friends/Friends'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Home() {

  
  let { isAuthenticated } = useSelector((state) => state.auth);
  let navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/signin");
    }
  }, [isAuthenticated]);

  
  return (
    <div className='Home-layout'>
      <div className='trending-sections'>
     <Trending />
      </div>
      <div className='user-post-section'>
     <UserPosts className='post-sections'  />
      </div>
     <div className='friends-section'>
     <Friends className='friend-sections' />
     </div>
     
    </div>

  )
}

export default Home