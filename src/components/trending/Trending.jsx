import React from 'react'
import './Trending.css'
import TrendingCard from '../trendingCards/TrendingCard'

function Trending() {
  return (
    <div>
        <TrendingCard title='Most Trending' tags={["#kisan",'#justice',"#india","#modi","#bjp"]}/>
        <TrendingCard title='Most Trending Politics Tags' tags={["#kisan",'#justice',"#india","#modi","#bjp"]}/>
    </div>
  )
}

export default Trending