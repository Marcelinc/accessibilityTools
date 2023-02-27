import React, { useState } from 'react'
import { BsCircleHalf } from 'react-icons/bs'
import { FaWheelchair } from 'react-icons/fa'
import FontsizeTT from './FontsizeTT'

const DropDownMenu = ({endTask}) => {

    const [visible,setVisible] = useState(false)

  return (
    <div>
        <FaWheelchair id='dropdown-menu-button' onClick={() => setVisible(!visible)}/>
        {visible && <div className='accessibility-menu'>
            <h2>Narzędzia dostępności</h2>
            <p className='menu-item'><span><FontsizeTT/></span>Powiększenie tekstu</p>
            <p className='menu-item' onClick={endTask}><BsCircleHalf/> Zmień kontrast</p>
        </div>}
    </div>
  )
}

export default DropDownMenu