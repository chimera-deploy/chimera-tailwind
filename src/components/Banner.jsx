import React from 'react'

const Banner = ({ title, subtitle }) => {
  
  return (
    <div className="flex flex-col place-content-center place-items-center bg-greensheen h-96" >
      <h1 className="font-koulen text-9xl text-white">{title}</h1>
      <p className="font-koulen text-2xl text-center">{subtitle}</p>
    </div>
  )
}

export default Banner
