import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { OverallTimeContext } from '../../App'
import { StartTimeContext } from '../../pages/UniversityFour'
import {BsCircleHalf} from 'react-icons/bs'
import FontSizeAPlusMinus from '../accessibilityTools/FontSizeAPlusMinus'
import DropDownMenu from '../accessibilityTools/DropDownMenu'

const Tools = ({version}) => {

    const timeContext = useContext(OverallTimeContext)
    const navigation = useNavigate()
    const startTimeContext = useContext(StartTimeContext)

    const handleChangeContrast = () => {
        let endTime = Date.now()
        console.log('startTime: ',startTimeContext.startTime)
        console.log('endTime: ',endTime)
        console.log('FinalTime: ',endTime-startTimeContext.startTime)
        timeContext.setTime4(endTime-startTimeContext.startTime)
        navigation('/task4/complete',{state: {destiny: '/final'}})
    }

  return (
    <div className='tools'>
    {version === 'B' ? <>
      <BsCircleHalf id='contrast'/>
      <FontSizeAPlusMinus endTask={handleChangeContrast}/>
    </> : <>
      <DropDownMenu endTask={handleChangeContrast}/>
    </>}
    <span id='tools-lang'>EN</span>
  </div>
  )
}

export default Tools