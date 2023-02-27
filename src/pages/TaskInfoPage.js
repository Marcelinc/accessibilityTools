import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../resource/css/Welcome.css'

const TaskInfoPage = ({strona,zadanie,tresc,destiny}) => {

    const navigate = useNavigate()

  return (
    <div className='content'>
        <h1>Strona {strona}</h1>
        <p>Zadanie nr. {zadanie}</p>
        <p>{tresc}</p>
        <button onClick={() => navigate(destiny)}>Rozpocznij</button>
    </div>
  )
}

export default TaskInfoPage