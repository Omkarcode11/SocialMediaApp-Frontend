import React, { useEffect } from 'react'
import './Error.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



function Error() {
  const {isAuthenticated} = useSelector((state)=>state.auth)
  const navigate = useNavigate()

  useEffect(()=>{
   if(!isAuthenticated){
    navigate('/signin')
   }
  },[isAuthenticated])

  return (
    <div className='err'>
         <img src='/Error.avif' style={{height:'50vw'}}/>
    </div>
  )
}

export default Error