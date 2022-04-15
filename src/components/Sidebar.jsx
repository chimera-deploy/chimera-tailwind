import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({ sidebarVisible }) => {
  return (
    <div className={sidebarVisible ? 'md:block hidden fixed top-24 left-0' : 'hidden'}>
      <ul className='font-san text-tyrianpurple text-xl px-4 space-y-2'>
        <li><Link to='/#deployments' className='hover:text-2xl hover:font-bold'>Deployments</Link></li>
        <li><Link to='/#canary' className='hover:text-2xl hover:font-bold'>Canary Deployments</Link></li>
        <li><Link to='/#solutions' className='hover:text-2xl hover:font-bold'>Current Solutions</Link></li>        
        <li><Link to='/#features' className='hover:text-2xl hover:font-bold'>Central Features</Link></li>
        <li><Link to='/#using' className='hover:text-2xl hover:font-bold'>Using Chimera</Link></li>
        <li><Link to='/#design' className='hover:text-2xl hover:font-bold'>Design Decisions</Link></li>
        <li><Link to='/#future' className='hover:text-2xl hover:font-bold'>Future Work</Link></li>
      </ul>
    </div>
  )
}

export default Sidebar
