import React from 'react'

const FontSizeAPlusMinus = ({endTask}) => {
  return (
    <div className='aplusminustool'>
        <span id='Aminus'>A-</span>
        <span id='Amiddle'></span>
        <span id='Aplus' onClick={endTask}>A+</span>
    </div>
  )
}

export default FontSizeAPlusMinus