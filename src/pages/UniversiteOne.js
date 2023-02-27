import React, { createContext, useContext, useEffect, useState } from 'react'
import '../resource/css/UniversityOne.css'
import Nav from '../components/PageOne/Nav'
import Content from '../components/PageOne/Content'

export const StartTimeContext = createContext()

const UniversiteOne = ({version}) => {
  const [startTime,setStartTime] = useState(Date.now())


  useEffect(() => {
    console.log(startTime)
  },[])

  return (
    <StartTimeContext.Provider value={{startTime}}>
      <div  className='bg-1'>
          <Nav version={version}/>
          <Content version={version}/>
      </div>
    </StartTimeContext.Provider>
  )
}

export default UniversiteOne