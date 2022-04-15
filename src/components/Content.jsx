import React from 'react'
import caseStudy from '../assets/caseStudy.json'

const Content = () => {
  const sectionHeaders = Object.keys(caseStudy)

  return (
    <>
      {sectionHeaders.map(header => {
        const paragraphs = caseStudy[header].split(/\n/)
        return (
          <div key={header} id={header} className='md:mx-64 mx-12'>
            <h2 className='font-koulen text-tyrianpurple text-4xl text-center my-6'>{header}</h2>
            <div className='font-sans text-lg space-y-3'>
              {paragraphs.map((paragraph, idx) => <p key={`${paragraph.length}-${header}-${idx}`}>{paragraph}</p>)}
            </div>
          </div>    
        )
      })}
    </>
  )  
}

export default Content
