import React from 'react'
import FontsizeAPlus from './accessibilityTools/FontsizeAPlus'
import ContrastASquare from './accessibilityTools/ContrastASquare'
import ContrastEye from './accessibilityTools/ContrastEye'
import FontsizeA from './accessibilityTools/FontsizeA'

const ToolList = () => {
  return (
    <div>
      <ContrastASquare background='white' color='black'/>
      <ContrastASquare background='black' color='white'/>
      <ContrastASquare background='black' color='yellow'/>
      <ContrastASquare background='yellow' color='black'/>
      <FontsizeAPlus symbol='A'/>
      <FontsizeAPlus symbol='A+'/>
      <FontsizeAPlus symbol='A++'/>
      <ContrastEye background='white' color='black'/>
      <ContrastEye background='black' color='white'/>
      <ContrastEye background='black' color='yellow'/>
      <ContrastEye background='yellow' color='black'/>
      <FontsizeA size='small'/>
      <FontsizeA size='medium'/>
      <FontsizeA size='large'/>
    </div>
  )
}

export default ToolList