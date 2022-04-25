import React from 'react'
import willPhoto from '../images/headshots/will-rossen.jpg'
import wesPhoto from '../images/headshots/wes-anderson.png'
import joshPhoto from '../images/headshots/josh-leath.jpg'
import trevorPhoto from '../images/headshots/trevor-kelly.jpg'

const Member = ({ photo, github, name, location, email, website, linkedin }) => {
  return (
    <div className='basis-1/4 p-5'>
      <a href={github} target="_blank" className="">
        <img src={photo} alt={name} className='rounded-full max-h-48 m-auto'></img>
      </a>
      <h3 className='text-3xl text-tyrianpurple'>{name}</h3>
      <h4 className='text-2xl text-flame'>{location}</h4>
      <div className='flex flex-row place-content-center gap-2'>
        <a href={"mailto:" + email} target="_blank">
          <svg className="w-6 h-6 stroke-tyrianpurple fill-transparent hover:stroke-greensheen" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>  
        </a>
        <a href={website} target="_blank">
          <svg className="w-6 h-6 stroke-tyrianpurple fill-transparent hover:stroke-greensheen" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
        </a>
        <a className='my-auto' href={linkedin} target="_blank">
          <svg className='w-5 h-5 mx-0.5 stroke-tyrianpurple fill-tyrianpurple hover:stroke-greensheen hover:fill-greensheen' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </a>            
      </div>
    </div>
  )
}

const Team = () => {
  return (
    <div>
      <div className='flex flex-row flex-wrap justify-center font-koulen text-center'>
        <Member photo={willPhoto} github='https://github.com/wor101' name='Will Rossen' location='Boston, MA' email='wor101@gmail.com' website='https://www.willrossen.com' linkedin='https://www.linkedin.com/in/william-rossen-1ab5a320'/>
        <Member photo={trevorPhoto} github='https://github.com/TrevorDKelly' name='Trevor Kelly' location='Pittsburgh, PA' email='trevor.daniel.kelly@gmail.com' website='' linkedin='https://linkedin.com/in/trevor-kelly-2a036770/'/>
        <Member photo={wesPhoto} github='https://github.com/w-h-a' name='Wes Anderson' location='Springfield, MA' email='wesley.herb.anderson@gmail.com' website='' linkedin='https://www.linkedin.com/in/wes-anderson-479087101/'/>
        <Member photo={joshPhoto} github='https://github.com/jleath' name='Josh Leath' location='Columbus, OH' email='joshua.leath@icloud.com' website='' linkedin='https://www.linkedin.com/in/joshua-leath/'/>
      </div>
    </div>
  )
}

export default Team
