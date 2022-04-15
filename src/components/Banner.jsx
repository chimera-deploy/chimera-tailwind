import React from 'react'

const Banner = () => {
  return (
    <div className="flex flex-col place-content-center place-items-center bg-greensheen h-96" >
      <h1 className="font-koulen text-9xl text-white">Chimera</h1>
      <p className="font-koulen text-2xl text-center">An automated canary deployment tool for containerized microservices</p>
    </div>
  )
}

export default Banner
