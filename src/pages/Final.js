import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { OverallTimeContext } from '../App'

const Final = () => {

  const navigate = useNavigate()

  const time = useContext(OverallTimeContext)

  const timeOne = time.time1/1000
  const timeTwo = time.time2/1000
  const timeThree = time.time3/1000

  const finish = () => {
    time.setTime1(0)
    time.setTime2(0)
    time.setTime3(0)
    navigate('/')
  }

  return (
    <div className='content'>
        <h1>Rozwiązano wszystkie zadania!</h1>
        <p>Poniżej znajdują się czasy rozwiązywania poszczególnych zadań. Wykorzystaj je w części drugiej.</p>
        <p>Zadanie nr. 1 | {timeOne} s</p>
        <p>Zadanie nr. 2 | {timeTwo} s</p>
        <p>Zadanie nr. 3 | {timeThree} s</p>
        <p>Druga część badania obejmuje wypełnienie ankiety dotyczącej wykorzystywania narzędzi dostępności</p>
        <button>
          <a href='https://docs.google.com/forms/d/e/1FAIpQLSfiFcTpljEGFHDN1JrInd1YVWrF0n7hJzUQLy0UG8yqx9KKxA/viewform?usp=sf_link' target='_blank' id='ankieta'>
            Przejdź do ankiety
          </a>
        </button>
        <button onClick={finish}>Zakończ</button>
    </div>
  )
}

export default Final