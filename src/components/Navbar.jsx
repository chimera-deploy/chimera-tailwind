import React from 'react'
import { Link } from 'react-router-dom'
import colorLogo from '../images/Chimera_graphic_color.svg'

const Navbar = ({toggle}) => {
  return (
    <div className="flex justify-between place-items-center">
        <Link to="/" className="flex-none">
          <div className="h-20">
            <img src={colorLogo} alt="color chimera" className='h-full'/>
          </div>
        </Link>
      <nav className="grow h-20 md:flex hidden place-items-center px-8 font-koulen text-3xl text-tyrianpurple">
        <Link to="/" className="p-4 hover:bg-flame hover:text-white rounded-lg whitespace-nowrap ">Home</Link>
        <Link to="/casestudy" className="p-4 hover:bg-flame hover:text-white rounded-lg whitespace-nowrap">Case Study</Link>
        <Link to="/team" className="p-4 hover:bg-flame hover:text-white rounded-lg whitespace-nowrap">Our Team</Link>
      </nav>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg className="w-6 h-6" fill="none" 
        stroke="#69163E" viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" strokeLinejoin="round" 
            strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    </div>

  )
}

export default Navbar
