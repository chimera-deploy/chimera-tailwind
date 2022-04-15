import React from 'react'
import { Link } from 'react-router-dom'
import octoCat from '../images/Octocat/Octocat.png'
import tyrianKitty from '../images/github-tyrianpurple-kitty.png'

const Dropdown = ({toggle, dropdownVisible}) => {
  return (
    <nav className={dropdownVisible ? "flex flex-col items-center font-koulen text-3xl text-tyrianpurple" : "hidden"}>
      <Link to="/" className="p-4 hover:bg-flame hover:text-white rounded-lg whitespace-nowrap ">Home</Link>
      <Link to="/casestudy" className="p-4 hover:bg-flame hover:text-white rounded-lg whitespace-nowrap">Case Study</Link>
      <Link to="/team" className="p-4 hover:bg-flame hover:text-white rounded-lg whitespace-nowrap">Our Team</Link>
      <a href="https://github.com/chimera-deploy/Chimera" className="h-20"><img src={tyrianKitty} className="h-14"></img></a>
    </nav>
  )
}

export default Dropdown
