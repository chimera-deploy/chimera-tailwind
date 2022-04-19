import React from 'react'
import Banner from '../components/Banner'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'

const CaseStudy = ({ sidebarVisible }) => {
  return (
    <>
      <Banner title='Chimera' subtitle='An automated canary deployment tool for containerized microservices' />
      <Sidebar sidebarVisible={sidebarVisible}/>
      <Content />
    </>
  )
}

export default CaseStudy
