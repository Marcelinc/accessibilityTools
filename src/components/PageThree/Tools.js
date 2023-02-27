import React from 'react'
import { useNavigate } from 'react-router-dom'
import {BsCircleHalf} from 'react-icons/bs'
import FontSizeAPlusMinus from '../accessibilityTools/FontSizeAPlusMinus'
import { FaWheelchair } from 'react-icons/fa'
import DropDownMenu from '../accessibilityTools/DropDownMenu'

const Tools = ({version}) => {

    const navigation = useNavigate()

    const handleChangeContrast = () => {
        navigation('/task3/complete',{state: {destiny: '/final'}})
    }

  return (
    <div className='tools'>
      {version === 'A' ? <>
        <BsCircleHalf id='contrast' onClick={handleChangeContrast}/>
        <FontSizeAPlusMinus/>
      </> : <>
        <DropDownMenu/>
      </>}
    </div>
  )
}

export default Tools