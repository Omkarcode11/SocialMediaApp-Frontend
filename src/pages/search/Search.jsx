import React, { useEffect, useRef, useState } from 'react'
import './Search.css'
import SuggestedFriends from '../../components/suggestedFriend/SuggestedFriends'
import { CiSearch } from 'react-icons/ci'
import useGetApi from '../../hooks/useGetApi'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Search() {
    let navigate = useNavigate()
    let searchInput = useRef()
    let [notFriendData, setNotFriendData] = useState([]);
    let {id ,isAuthenticated}  = useSelector((state)=>state.auth)

    async function gettingNotFriendUser() {
      let data = await useGetApi(`/user/notMyFriends/${id}`, {
        headers: {
          Authorization: "Berar " + localStorage.getItem("FreedomToken"),
        },
      });
      setNotFriendData(data);
    }

    useEffect(()=>{
      if(isAuthenticated){
        gettingNotFriendUser()
      }else{
       navigate('/signin')
      }
    
    },[isAuthenticated])

    console.log(notFriendData)

  return (
    <div className='search-layout'>
        <div className="search-friends-search">
            <input placeholder="Search" ref={searchInput} type="text" />
            <CiSearch
              size={"2rem"}
              onClick={() => console.log(searchInput.current.value)}
            />
          </div>
          <h1 className='search-suggested-friend'>Suggested Friend</h1>
     {notFriendData?.map((user)=>
    <SuggestedFriends key={user._id} name={user.firstName[0].toUpperCase()+user.firstName.slice(1)+" "+ user.lastName[0].toUpperCase()+user.lastName.slice(1)} userId={user.firstName[0].toUpperCase()+user.firstName.slice(1)}/>
     )}
    </div>
  )
}

export default Search