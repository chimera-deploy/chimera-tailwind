import React from 'react'
import caseStudy from '../assets/caseStudy.json'

const Content = () => {
  const sectionHeaders = Object.keys(caseStudy)

  return (
    <>
      {sectionHeaders.map(header => {
        const paragraphs = caseStudy[header].split(/\n/)
        //console.log(paragraphs.split(/\n/))
        return (
          <div key={header} className='md:mx-64 mx-12'>
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



/*

    <div className='h-screen md:mx-64 mx-12'>
      <h2 className='font-koulen text-tyrianpurple text-4xl text-center my-6'>Deployments in Modern Systems</h2>
      <div className='font-sans text-lg space-y-3'>
        <p>Incididunt ut duis nisi proident dolor voluptate ut ex. Cillum reprehenderit sit aute ad duis est consectetur. Sunt sint fugiat magna nisi do. Laboris id nisi ad veniam nulla proident proident mollit consequat. Excepteur aute reprehenderit velit irure consectetur nulla aliquip. Qui ex id aute aute anim ullamco eiusmod. Nisi reprehenderit fugiat aute commodo nulla ut commodo ut velit.</p>
        <p>Cillum enim ipsum eiusmod esse voluptate minim ipsum eu culpa fugiat esse laborum nulla. Elit ex eu enim magna amet deserunt minim ea. Deserunt ex tempor est amet ea est exercitation velit. Deserunt do consequat excepteur esse dolor nulla et voluptate magna esse exercitation duis labore. Pariatur minim adipisicing sint nisi esse dolor nulla veniam elit amet velit magna. Voluptate adipisicing occaecat nisi occaecat proident. Dolor Lorem exercitation tempor dolor aute ut adipisicing mollit ea dolor cillum in.</p>
        <p>Exercitation ad culpa cillum eu ut id cupidatat mollit dolor. Elit ex dolore tempor do amet sit dolore Lorem duis nostrud. Ex nulla deserunt mollit ex culpa quis cupidatat sint veniam sint. Excepteur qui nisi culpa minim minim eu consequat.</p>
      </div>
    </div>
*/