import React from 'react'
import Banner from '../components/Banner'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'
import chimeraLogoTitle from '../images/color-logo-title.png'

const CaseStudy = ({ sidebarVisible }) => {
  return (
    <>
      {/* <Banner title='Chimera' subtitle='An automated canary deployment tool for containerized microservices' /> */}
      <div id="home" className="flexf flex-col flex-start md:py-12 py-20 bg-greensheen" >
        <img src={chimeraLogoTitle} alt='banner' className="mx-auto h-[500px]"></img>
      </div>
      <Sidebar sidebarVisible={sidebarVisible}/>
      <Content />   
    </>
  )
}

export default CaseStudy
