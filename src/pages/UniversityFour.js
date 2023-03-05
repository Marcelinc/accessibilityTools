import React, { createContext, useState } from 'react'
import Nav from '../components/PageFour/Nav'
import '../resource/css/UniversityFour.css'

export const StartTimeContext = createContext()

const UniversityFour = ({version}) => {

  const [startTime,setStartTime] = useState(Date.now())

  return (
    <StartTimeContext.Provider value={{startTime}}>
      <div className='bg-4'>
          <Nav version={version}/>
          <div id='scroll-button'></div>
      </div>
    </StartTimeContext.Provider>
  )
}

export default UniversityFour