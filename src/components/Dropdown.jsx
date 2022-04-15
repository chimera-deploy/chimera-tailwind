import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({toggle, dropdownVisible}) => {
  return (
    <nav className={dropdownVisible ? "flex flex-col items-center font-koulen text-3xl text-tyrianpurple" : "hidden"}>
      <Link to="/" className="p-4 hover:bg-flame hover:text-white rounded-lg whitespace-nowrap ">Home</Link>
      <Link to="/casestudy" className="p-4 hover:bg-flame hover:text-white rounded-lg whitespace-nowrap">Case Study</Link>
      <Link to="/team" className="p-4 hover:bg-flame hover:text-white rounded-lg whitespace-nowrap">Our Team</Link>
    </nav>
  )
}

export default Dropdown
