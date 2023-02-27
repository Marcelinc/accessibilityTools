import React from 'react'

const FontsizeA = ({size,endTask}) => {
  return (
    <div className='contrast' style={{fontSize: size === 'small' ? 14: size === 'medium' ? 18 : 22}} onClick={endTask}>A</div>
  )
}

export default FontsizeA