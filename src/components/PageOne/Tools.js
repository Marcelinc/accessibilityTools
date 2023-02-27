import React from 'react'
import { useNavigate } from 'react-router-dom'
import ContrastASquare from '../accessibilityTools/ContrastASquare'
import FontsizeAPlus from '../accessibilityTools/FontsizeAPlus'

const Tools = ({version}) => {

    const navigation = useNavigate()

    const handleChangeContrast = () => {
        navigation(`/task1${version}/complete`,{state: {destiny: `/task2${version}`}})
    }

  return (
    <div className='tools'> 
        <ContrastASquare background='white' color='black'/>
        <ContrastASquare background='black' color='white'/>
        <ContrastASquare background='black' color='yellow' endTask={handleChangeContrast}/>
        <ContrastASquare background='yellow' color='black'/>
        <FontsizeAPlus symbol='A'/>
        <FontsizeAPlus symbol='A+'/>
        <FontsizeAPlus symbol='A++'/>
    </div>
  )
}

export default Tools