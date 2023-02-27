import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import {BsCircleHalf} from 'react-icons/bs'
import FontSizeAPlusMinus from '../accessibilityTools/FontSizeAPlusMinus'
import { FaWheelchair } from 'react-icons/fa'
import DropDownMenu from '../accessibilityTools/DropDownMenu'
import { OverallTimeContext } from '../../App'
import { StartTimeContext } from '../../pages/UniversityThree'

const Tools = ({version}) => {

    const timeContext = useContext(OverallTimeContext) 
    const navigation = useNavigate()
    const startTimeContext = useContext(StartTimeContext)


    const handleChangeContrast = () => {
        let endTime = Date.now()
        console.log('startTime: ',startTimeContext.startTime)
        console.log('endTime: ',endTime)
        console.log('FinalTime: ',endTime-startTimeContext.startTime)
        timeContext.setTime3(endTime-startTimeContext.startTime)
        navigation('/task3/complete',{state: {destiny: '/final'}})
    }

  return (
    <div className='tools'>
      {version === 'A' ? <>
        <BsCircleHalf id='contrast' onClick={handleChangeContrast}/>
        <FontSizeAPlusMinus/>
      </> : <>
        <DropDownMenu endTask={handleChangeContrast}/>
      </>}
    </div>
  )
}

export default Tools