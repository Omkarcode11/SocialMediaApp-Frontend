import React from 'react'
import './SelfInfo.css'

function SelfInfo() {
  return (
    <div className='info-layout'>
      <div className='info-sec'>
        <h3 className='info-title'>Name </h3>
        <span> Omkar Sonawane</span>
      </div>
      <div className='info-sec'>
        <h3 className='info-title'>Bio </h3>
        <span> I am a self motivated person</span>
      </div>
      <div className='info-sec'>
        <h3 className='info-title'>working </h3>
        <span> Omkar Tattoo</span>
      </div>
      <div className='info-sec'>
        <h3 className='info-title'>City </h3>
        <span> Nashik</span>
      </div>
      <div className='info-sec'>
        <h3 className='info-title'>Status </h3>
        <span> Single</span>
      </div>
      <div className='info-sec'>
        <h3 className='info-title'>Friends </h3>
        <span> 206</span>
      </div>
      <div className='info-sec'>
        <h3 className='info-title'>Date of Birth </h3>
        <span> 12/12/2001</span>
      </div>
    </div>
  )
}

export default SelfInfo