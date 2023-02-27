import React from 'react'
import '../resource/css/UniversityOne.css'
import Nav from '../components/PageOne/Nav'
import Content from '../components/PageOne/Content'

const UniversiteOne = ({version}) => {
  return (
    <div  className='bg-1'>
      <Nav version={version}/>
      <Content version={version}/>
    </div>
  )
}

export default UniversiteOne