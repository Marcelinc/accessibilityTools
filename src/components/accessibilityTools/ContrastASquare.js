import React from 'react'
import '../../resource/css/Tools.css'

const ContrastASquare = ({background,color, endTask}) => {
  return (
    <div style={{backgroundColor: background,color:color}} className='tool' onClick={endTask}>A</div>
  )
}

export default ContrastASquare