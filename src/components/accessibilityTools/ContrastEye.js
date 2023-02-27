import React from 'react'
import { IoIosEye } from "react-icons/io";

const ContrastEye = ({background,color}) => {
  return (
    <div className='eye' style={{backgroundColor: background, color: color}}>
        <IoIosEye/>
    </div>
  )
}

export default ContrastEye