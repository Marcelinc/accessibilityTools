import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const TaskCompleted = ({final}) => {

    const navigation = useNavigate()
    const {state} = useLocation()
    const {destiny} = state

  return (
    <div className='content'>
        <h1>Gratulacje!</h1>
        <p>Wykonano {final && 'ostatnie'} zadanie</p>
        <p>Kliknij <strong>dalej</strong>, aby przejść do {final ? 'podsumowania' : 'następnego zadania'}</p>
        <button onClick={() => navigation(destiny)}>Dalej</button>
    </div>
  )
}

export default TaskCompleted