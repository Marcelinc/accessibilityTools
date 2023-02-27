import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { OverallTimeContext } from '../../App'
import { StartTimeContext } from '../../pages/UniversiteOne'
import ContrastASquare from '../accessibilityTools/ContrastASquare'
import FontsizeAPlus from '../accessibilityTools/FontsizeAPlus'

const Tools = ({version}) => {

    const timeContext = useContext(OverallTimeContext) 
    const navigation = useNavigate()
    const startTimeContext = useContext(StartTimeContext)

    const handleChangeContrast = () => {
      let endTime = Date.now()
      console.log('startTime: ',startTimeContext.startTime)
      console.log('endTime: ',endTime)
      console.log('FinalTime: ',endTime-startTimeContext.startTime)
      timeContext.setTime1(endTime-startTimeContext.startTime)
      navigation(`/task1${version}/complete`,{state: {destiny: `/task2${version}`}})
    }

    useEffect(() => {
      //console.log('tools:',time.startTime)
    },[])

  return (
    <div className='tools'> 
        <ContrastASquare background='white' color='black'/>
        <ContrastASquare background='black' color='white'/>
        <ContrastASquare background='black' color='yellow' endTask={handleChangeContrast}/>
        <ContrastASquare background='yellow' color='black'/>
        <FontsizeAPlus symbol='A'/>
        <FontsizeAPlus symbol='A+'/>
        <FontsizeAPlus symbol='A++'/>
    </div>
  )
}

export default Tools