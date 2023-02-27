import React, { createContext, useState } from 'react'
import Content from '../components/PageTwo/Content'
import Nav from '../components/PageTwo/Nav'
import '../resource/css/UniversityTwo.css'

export const StartTimeContext = createContext()

const UniversityTwo = ({version}) => {

  const [startTime,setStartTime] = useState(Date.now())

  return (
    <StartTimeContext.Provider value={{startTime}}>
      <div className='bg-2'>
        <Nav/>
        <Content version={version}/>
      </div>
    </StartTimeContext.Provider>
  )
}

export default UniversityTwo