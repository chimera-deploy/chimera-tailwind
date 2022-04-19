import React from 'react'
import Banner from '../components/Banner'
import ChimeraLogo from '../images/color-logo.png'

const Home = () => {
  return (
    <>
      <Banner title='Chimera' subtitle='An automated canary deployment tool for containerized microservices' />
      <div className='flex flex-col'>
        <img src={ChimeraLogo} alt="Chimera Logo"></img>
      </div>

    </>
  )
}

export default Home
