import React from 'react'
import { useLocation } from 'react-router-dom'

const teamBanner = {
  title: 'Chimera',
  subtitle: 'New album drops May 2022'
}

const caseStudyBanner = {
  title: 'Chimera',
  subtitle: 'An automated canary deployment tool for containerized microservices'
}


const Banner = () => {
  const pathname = useLocation().pathname
  const currentBanner = pathname === '/team' ? teamBanner : caseStudyBanner
  
  return (
    <div className="flex flex-col place-content-center place-items-center bg-greensheen h-96" >
      <h1 className="font-koulen text-9xl text-white">{currentBanner.title}</h1>
      <p className="font-koulen text-2xl text-center">{currentBanner.subtitle}</p>
    </div>
  )
}

export default Banner

/*
    <div className="flex flex-col place-content-center place-items-center bg-greensheen h-96" >
      <h1 className="font-koulen text-9xl text-white">Chimera</h1>
      <p className="font-koulen text-2xl text-center">An automated canary deployment tool for containerized microservices</p>
    </div>

*/