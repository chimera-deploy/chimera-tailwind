import React from 'react'
import caseStudy from '../assets/caseStudy.json'
import { useEffect } from 'react'

const addSidebarHighlight = (id) => {
  const stringId = id.replaceAll(' ', '%20')
  const sidebarLink = document.querySelector(`ul li a[href="#${stringId}"]`)
  if (sidebarLink) {
    sidebarLink.classList.add('text-2xl', 'text-bold')
  }  
}

const removeSidebarHightlight = (id) => {
  const stringId = id.replaceAll(' ', '%20')
  const sidebarLink = document.querySelector(`ul li a[href="#${stringId}"]`)
  if (sidebarLink) {
    sidebarLink.classList.remove('text-2xl', 'text-bold')
  }
}

const Content = () => {
  useEffect(()=> {
    const callback = (entries) => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id')
        if (entry.intersectionRatio > 0) {
          addSidebarHighlight(id)
        } else {
          removeSidebarHightlight(id)
        }
      })
    }

    const observer = new IntersectionObserver(callback)
    const sections = document.querySelectorAll("div[id]") 
    sections.forEach(section => observer.observe(section))
  }, [])

  const sectionHeaders = Object.keys(caseStudy)

  return (
    <>
      {sectionHeaders.map(header => {
        const paragraphs = caseStudy[header].split(/\n/)
        return (
          <div key={header} id={header} className='md:mx-64 mx-12'>
            <h2 className='font-koulen text-tyrianpurple text-4xl text-center my-6'>{header}</h2>
            <div className='font-sans text-lg space-y-3'>
              {paragraphs.map((paragraph, idx) => {
                
                return (
                  <p key={`${paragraph.length}-${header}-${idx}`}>{paragraph}</p>
                )
              })}
            </div>
          </div>    
        )
      })}
    </>
  )  
}

export default Content
