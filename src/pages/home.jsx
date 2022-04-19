import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import ChimeraLogo from '../images/color-logo.png'
import chimeraLogoTitle from '../images/color-logo-title.png'
import deployGif from '../images/start-deploy-v2-1-widescreen.gif'

const Home = () => {
  return (
    <>
      <div className="flexf flex-col flex-start py-12 bg-greensheen" >
        <img src={chimeraLogoTitle} alt='banner image' className="mx-auto h-[500px]"></img>
      </div>
      <div className="flex flex-col bg-flame h-full py-24 space-y-12">
        <h3 className="font-koulen text-white text-4xl text-center px-12">Chimera is an open-source tool for performing automated canary deployments of containerized microservices</h3>
        <div className="mx-auto pb-12">
          <Link to="/casestudy" className="bg-white font-koulen text-4xl rounded-lg px-2 hover:bg-tyrianpurple hover:text-white shadow-2xl">Case Study</Link>
        </div>
      </div>
    </>
  )
}

export default Home


/*
    <>
      <Banner image={chimeraLogoTitle} />
      <div className='flex flex-col bg-flame min-h-screen place-content-center space-y-6 pb-12'>
        <div className='mx-auto mt-12 mb-12 max-h-80 shadow-2xl'>
          <img src={deployGif} className='max-h-80 max-w-80' alt='deploy'></img>
        </div>        
        <h2 className="font-koulen text-4xl text-white text-center px-6 mt-6">Automated Canary Deployments for Containerized Microservices</h2>
        <h3 className="font-koulen text-2xl text-center px-6">Chimera is an open-source tool for performing automated canary deployments of containerized microservices orchestrated by Amazon ECS, running on Fargate, and communicating via App Mesh</h3>
        <div className="mx-auto m- p-2 bg-goldenrod hover:text-white font-koulen text-4xl text-tyrianpurple shadow-2xl rounded-lg">
          <Link to="/casestudy" className="">Read Our Case Study</Link>
        </div>        
      </div>
    </>

*/
