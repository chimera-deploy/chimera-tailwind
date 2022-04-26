import React from 'react'
import Banner from '../components/Banner'

const Presentation = () => {
  return (
    <div>
      <Banner title='The Presentation' subtitle='Presented by Joshua Leath, Trevor Kelly, Wesley Anderson, and Will Rossen on April 18th, 2022'/>
        <div className="flex justify-center py-12">
          <iframe className="shadow-xl" width="840" height="473" src="https://www.youtube.com/embed/ENxgQ3seRB0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
        </div>
    </div>
  )
}

export default Presentation
