import React, { useState } from 'react'
import { BsCircleHalf } from 'react-icons/bs'
import { FaWheelchair } from 'react-icons/fa'
import FontsizeTT from './FontsizeTT'

const DropDownMenu = ({endTask}) => {

    const [visible,setVisible] = useState(false)
    const location = window.location.href
    //console.log(location.split('/')[3])

  return (
    <div>
        <FaWheelchair id='dropdown-menu-button' onClick={() => setVisible(!visible)}/>
        {visible && <div className='accessibility-menu'>
            <h2>Narzędzia dostępności</h2>
            {location.split('/')[3] === 'site3B' ? <>
              <div className='menu-item'><span><FontsizeTT/></span>Powiększenie tekstu</div>
              <p className='menu-item' onClick={endTask}><BsCircleHalf/> Zmień kontrast</p>
            </> : <>
              <div className='menu-item' onClick={endTask}><span><FontsizeTT/></span>Powiększenie tekstu</div>
              <p className='menu-item' ><BsCircleHalf/> Zmień kontrast</p>
            </>}
        </div>}
    </div>
  )
}

export default DropDownMenu