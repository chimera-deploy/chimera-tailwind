import React from 'react'
import Banner from '../components/Banner'
import teamPhoto from '../images/team-photo.png'

const Team = () => {
  return (
    <div>
      <Banner />
      <img src={teamPhoto} alt="The Chimera team hard at work"></img>
    </div>
  )
}

export default Team
