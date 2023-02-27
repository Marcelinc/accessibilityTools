import React from 'react'
import { useNavigate } from 'react-router-dom'
import ContrastEye from '../accessibilityTools/ContrastEye'
import FontsizeA from '../accessibilityTools/FontsizeA'
import FontSizeAPlusMinus from '../accessibilityTools/FontSizeAPlusMinus'
import { FaRegEyeSlash } from 'react-icons/fa'

const Tools = ({version}) => {

    const navigation = useNavigate()

    const handleTaskA = () => {
        navigation('/task2A/complete',{state: {destiny: '/task3A'}})
    }

    const handleTaskB = () => {
      navigation('/task2B/complete',{state: {destiny: '/task3B'}})
    }

  return (
    <div className='tools'>
      {version === 'A' ? <>
        <FontsizeA size='small'/>
        <FontsizeA size='medium'/>
        <FontsizeA size='large' endTask={handleTaskA}/>
        <ContrastEye background='white' color='black'/>
        <ContrastEye background='black' color='white'/>
        <ContrastEye background='black' color='yellow'/>
        <ContrastEye background='yellow' color='black'/>
      </> : <>
        <FontSizeAPlusMinus endTask={handleTaskB}/>
        <FaRegEyeSlash id='contrast'/>
      </>} 
    </div>
  )
}

export default Tools