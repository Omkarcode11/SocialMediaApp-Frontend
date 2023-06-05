import React from 'react'
import './Notify.css'

function Notify({message,color,display='none'}) {
  return (
    <div className='notify-layout' style={{backgroundColor:color,display:display
    }}>
        {message}
    </div>
  )
}

export default Notify