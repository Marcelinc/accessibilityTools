import React, { createContext, useState } from 'react'
import { Content } from '../components/PageThree/Content'
import Nav from '../components/PageThree/Nav'
import '../resource/css/UniversityThree.css'

export const StartTimeContext = createContext()

const UniversityThree = ({version}) => {

  const [startTime,setStartTime] = useState(Date.now())

  return (
    <StartTimeContext.Provider value={{startTime}}>
      <div className='bg-3'>
          <Nav/>
          <Content version={version}/>
      </div>
    </StartTimeContext.Provider>
  )
}

export default UniversityThree