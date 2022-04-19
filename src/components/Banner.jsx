import React from 'react'

const Banner = ({ title, subtitle, image }) => {
  
  return (
    <div className="flex flex-col place-content-center place-items-center bg-greensheen h-96" >
      {title ? <h1 className="font-koulen text-9xl text-white">{title}</h1> : null }
      {subtitle ? <p className="font-koulen text-2xl text-center">{subtitle}</p> : null }
      {image ? <img src={image} alt='banner image' className='h-96'></img> : null}
    </div>
  )
}

export default Banner
