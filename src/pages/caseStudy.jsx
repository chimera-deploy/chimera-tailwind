import React from 'react'
import Banner from '../components/Banner'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'

const CaseStudy = ({ sidebarVisible }) => {
  return (
    <>
      <Banner />
      <Sidebar sidebarVisible={sidebarVisible}/>
      <Content />
    </>
  )
}

export default CaseStudy
