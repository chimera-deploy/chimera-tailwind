import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import ChimeraLogo from '../images/color-logo.png'
import chimeraLogoTitle from '../images/color-logo-title.png'

const Home = () => {
  return (
    <>
      <Banner image={chimeraLogoTitle} />
      <div className='flex flex-col bg-flame min-h-screen place-content-center space-y-6'>
        <h2 className="font-koulen text-4xl text-white text-center px-6 mt-6">Automated Canary Deployments for Containerized Microservices</h2>
        <h3 className="font-koulen text-2xl text-center px-6">Chimera is an open-source tool for performing automated canary deployments of containerized microservices orchestrated by Amazon ECS, running on Fargate, and communicating via App Mesh</h3>
        <div className="mx-auto p-2 bg-goldenrod hover:text-white font-koulen text-4xl text-tyrianpurple rounded-lg">
          <Link to="/casestudy" className="">Read Our Case Study</Link>
        </div>
        
      </div>

    </>
  )
}

export default Home
