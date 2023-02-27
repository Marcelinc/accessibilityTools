import React from 'react'
import Content from '../components/PageTwo/Content'
import Nav from '../components/PageTwo/Nav'
import '../resource/css/UniversityTwo.css'

const UniversityTwo = ({version}) => {
  return (
    <div className='bg-2'>
      <Nav/>
      <Content version={version}/>
    </div>
  )
}

export default UniversityTwo