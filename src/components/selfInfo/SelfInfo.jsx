import React from 'react'
import './SelfInfo.css'
import { useSelector } from 'react-redux'

function SelfInfo() {

  let {firstName,lastName,bio,work,city,status,friends,DOB} = useSelector((state)=>state.auth)

  return (
    <div className='info-layout'>
      <div className='info-sec'>
        <h3 className='info-title'>Name </h3>
        <span>{firstName&& lastName ? firstName[0].toUpperCase()+firstName.slice(1) +" " +lastName[0].toUpperCase()+lastName.slice(1):"Not Set"}</span>
      </div>
      <div className='info-sec'>
        <h3 className='info-title'>Bio </h3>
        <span>{bio ? bio :"Not Set"}</span>
      </div>
      <div className='info-sec'>
        <h3 className='info-title'>working </h3>
        <span>{work ? work : "Not Set"}</span>
      </div>
      <div className='info-sec'>
        <h3 className='info-title'>City </h3>
        <span> {city?city[0].toUpperCase()+city.slice(1) :"Not Set"}</span>
      </div>
      <div className='info-sec'>
        <h3 className='info-title'>Status </h3>
        <span>{status ? status[0].toUpperCase()+status.slice(1)  :"Not Set"}</span>
      </div>
      <div className='info-sec'>
        <h3 className='info-title'>Friends </h3>
        <span>{friends.length}</span>
      </div>
      <div className='info-sec'>
        <h3 className='info-title'>Date of Birth </h3>
        <span>{DOB ? DOB : "Not Set"} </span>
      </div>
    </div>
  )
}

export default SelfInfo