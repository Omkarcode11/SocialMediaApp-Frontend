import React, { useRef } from 'react'
import './Search.css'
import SuggestedFriends from '../../components/suggestedFriend/SuggestedFriends'
import { CiSearch } from 'react-icons/ci'

function Search() {
    let searchInput = useRef()
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
            <SuggestedFriends name={'Omkar'} userId={'Om'}/>
    <SuggestedFriends name={'Omkar'} userId={'Om'}/>
    <SuggestedFriends name={'Omkar'} userId={'Om'}/>
    <SuggestedFriends name={'Omkar'} userId={'Om'}/>
    <SuggestedFriends name={'Omkar'} userId={'Om'}/>
    <SuggestedFriends name={'Omkar'} userId={'Om'}/>
    <SuggestedFriends name={'Omkar'} userId={'Om'}/>
    <SuggestedFriends name={'Omkar'} userId={'Om'}/>
    <SuggestedFriends name={'Omkar'} userId={'Om'}/>
    </div>
  )
}

export default Search