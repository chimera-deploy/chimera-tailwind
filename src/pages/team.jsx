import React from 'react'
import Banner from '../components/Banner'
import TeamMembers from '../components/Team'

const Team = () => {
  return (
    <div>
      <Banner title='The Team' subtitle='Crushing Canary Deployments Since 2022'/>
      <TeamMembers />
    </div>
  )
}

export default Team
