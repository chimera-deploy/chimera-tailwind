import React from 'react'

const Sidebar = ({ sidebarVisible }) => {
  const linkFormatLarge = 'hover:text-2xl hover:text-bold hover:text-greensheen'
  const linkFormat = 'hover:text-bold hover:text-greensheen'

  return (
    <div className={sidebarVisible ? 'md:block hidden fixed top-24 left-0' : 'hidden'}>
      <ul className='font-koulen text-right text-tyrianpurple text-xl px-4 animate-fade space-y-2' >
        <li><a href='#introduction' className={linkFormat}>1. Introduction</a></li>
        <li><a href='#containerizedMicroservices' className={linkFormat}>2. Microservices</a></li>
        <li><a href='#deployingMicroservices' className={linkFormat}>3. Deploying Microservices</a></li>
        <li><a href='#existingSolutions' className={linkFormat}>4. Existing Solutions</a></li>
        <li><a href="#introducingChimera" className={linkFormat}>5. Introducing Chimera</a></li>
        <li><a href="#chimerasArchitecture" className={linkFormat}>6. Chimera's Architecture</a></li>
        <li><a href='#usingChimera' className={linkFormat}>7. Using Chimera</a></li>
        <li><a href='#technicalChallenges' className={linkFormat}>8. Technical Challenges</a></li>
        <li><a href='#futureWork' className={linkFormat}>9. Future Work</a></li>
        <li><a href='#references' className={linkFormat}>10. References</a></li>
        <li><a href='#ourTeam' className={linkFormat}>11. Our Team</a></li>
      </ul>
    </div>
  )
}

export default Sidebar
/*
    <div className={sidebarVisible ? 'md:block hidden fixed top-24 left-0' : 'hidden'}>
      <ul className='font-koulen text-tyrianpurple text-xl px-4 animate-fade space-y-2' >
        <li><a href='#Deployments%20In%20Modern%20Systems' className='hover:text-2xl hover:text-bold'>Deployments</a></li>
        <li><a href='#Components%20of%20a%20Canary%20Deployment' className='hover:text-2xl hover:text-bold '>Canary Deployments</a></li>
        <li><a href='#Current%20Solutions' className='hover:text-2xl hover:text-bold'>Current Solutions</a></li>        
        <li><a href='#Central%20Features%20of%20Chimera' className='hover:text-2xl hover:text-bold '>Central Features</a></li>
        <li><a href="#Using%20Chimera:%20The%20Dev's%20Perspective" className='hover:text-2xl hover:text-bold '>Using Chimera</a></li>
        <li><a href="#Technical%20Challenges%20&%20Design%20Decisions" className='hover:text-2xl hover:text-bold '>Design Decisions</a></li>
        <li><a href='#Future%20Work' className='hover:text-2xl hover:text-bold '>Future Work</a></li>      
      </ul>
    </div>


*/




/*
    <div className={sidebarVisible ? 'md:block hidden fixed top-24 left-0' : 'hidden'}>
      <ul className='font-san text-tyrianpurple text-xl px-4 space-y-2'>
        <li><a href='#Deployments%20In%20Modern%20Systems' className='hover:text-2xl hover:font-bold'>Deployments</a></li>
        <li><a href='#Components%20of%20a%20Canary%20Deployment' className='hover:text-2xl hover:font-bold'>Canary Deployments</a></li>
        <li><a href='#Current%20Solutions' className='hover:text-2xl hover:font-bold'>Current Solutions</a></li>        
        <li><a href='#Central%20Features%20of%20Chimera' className='hover:text-2xl hover:font-bold'>Central Features</a></li>
        <li><a href="#Using%20Chimera:%20The%20Dev's%20Perspective" className='hover:text-2xl hover:font-bold'>Using Chimera</a></li>
        <li><a href="#Technical%20Challenges%20&%20Design%20Decisions" className='hover:text-2xl hover:font-bold'>Design Decisions</a></li>
        <li><a href='#Future%20Work' className='hover:text-2xl hover:font-bold'>Future Work</a></li>      
      </ul>
    </div>
*/

/*
    <div className={sidebarVisible ? 'md:block hidden fixed top-24 left-0' : 'hidden'}>
      <ul className='font-koulen text-tyrianpurple text-xl px-4 space-y-2' >
        <li><a href='#Deployments%20In%20Modern%20Systems' className='px-2 rounded-lg hover:text-2xl hover:text-white hover:bg-flame hover:text-bold '>Deployments</a></li>
        <li><a href='#Components%20of%20a%20Canary%20Deployment' className='px-2 rounded-lg hover:text-2xl hover:text-white hover:bg-flame hover:text-bold '>Canary Deployments</a></li>
        <li><a href='#Current%20Solutions' className='px-2 rounded-lg hover:text-2xl hover:text-white hover:bg-flame hover:text-bold '>Current Solutions</a></li>        
        <li><a href='#Central%20Features%20of%20Chimera' className='px-2 rounded-lg hover:text-2xl hover:text-white hover:bg-flame hover:text-bold '>Central Features</a></li>
        <li><a href="#Using%20Chimera:%20The%20Dev's%20Perspective" className='px-2 rounded-lg hover:text-2xl hover:text-white hover:bg-flame hover:text-bold '>Using Chimera</a></li>
        <li><a href="#Technical%20Challenges%20&%20Design%20Decisions" className='px-2 rounded-lg hover:text-2xl hover:text-white hover:bg-flame hover:text-bold '>Design Decisions</a></li>
        <li><a href='#Future%20Work' className='px-2 rounded-lg hover:text-2xl hover:text-white hover:bg-flame hover:text-bold '>Future Work</a></li>      
      </ul>
    </div>

*/