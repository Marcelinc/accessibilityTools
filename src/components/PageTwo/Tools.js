import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import ContrastEye from '../accessibilityTools/ContrastEye'
import FontsizeA from '../accessibilityTools/FontsizeA'
import FontSizeAPlusMinus from '../accessibilityTools/FontSizeAPlusMinus'
import { FaRegEyeSlash } from 'react-icons/fa'
import { OverallTimeContext } from '../../App'
import { StartTimeContext } from '../../pages/UniversityTwo'

const Tools = ({version}) => {

    const navigation = useNavigate()
    const timeContext = useContext(OverallTimeContext) 
    const startTimeContext = useContext(StartTimeContext)

    const handleTaskA = () => {
      let endTime = Date.now()
      console.log('startTime: ',startTimeContext.startTime)
      console.log('endTime: ',endTime)
      console.log('FinalTime: ',endTime-startTimeContext.startTime)
      timeContext.setTime2(endTime-startTimeContext.startTime)
        navigation('/task2A/complete',{state: {destiny: '/task3A'}})
    }

    const handleTaskB = () => {
      let endTime = Date.now()
      console.log('startTime: ',startTimeContext.startTime)
      console.log('endTime: ',endTime)
      console.log('FinalTime: ',endTime-startTimeContext.startTime)
      timeContext.setTime2(endTime-startTimeContext.startTime)
      navigation('/task2B/complete',{state: {destiny: '/task3B'}})
    }

  return (
    <div className='tools'>
      {version === 'A' ? <>
        <FontsizeA size='small'/>
        <FontsizeA size='medium'/>
        <FontsizeA size='large' endTask={handleTaskA}/>
        <ContrastEye background='white' color='black'/>
        <ContrastEye background='black' color='white'/>
        <ContrastEye background='black' color='yellow'/>
        <ContrastEye background='yellow' color='black'/>
      </> : <>
        <FontSizeAPlusMinus endTask={handleTaskB}/>
        <FaRegEyeSlash id='contrast'/>
      </>} 
    </div>
  )
}

export default Tools