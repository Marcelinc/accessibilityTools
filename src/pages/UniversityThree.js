import React from 'react'
import { Content } from '../components/PageThree/Content'
import Nav from '../components/PageThree/Nav'
import '../resource/css/UniversityThree.css'

const UniversityThree = ({version}) => {
  return (
    <div className='bg-3'>
        <Nav/>
        <Content version={version}/>
    </div>
  )
}

export default UniversityThree