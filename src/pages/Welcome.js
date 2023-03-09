import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../resource/css/Welcome.css'

const Welcome = () => {

    const navigate = useNavigate()

  return (
    <div className='content'>
        <h1>Witaj na badaniu</h1>
        <p id='about'>Za chwilę ujrzysz cztery przykładowe strony uczelni wyższych wraz z zaimplementowanymi narzędziami dostępności. Twoim zadaniem 
          będzie odnalezienie ich oraz wykorzystanie do realizacji zadań. Eksperyment ma na celu określenie wpływu rozmieszczenia oraz sposobu prezentacji
          powyższych narzędzi na efektywność pracy i posługiwania się nimi przez użytkowników.</p>
        <p>Gdy będziesz gotowy/a kliknij <strong>start</strong></p>
        <div id='buttons'>
          <div className='version'>
            Wersja A 
            <button onClick={() => navigate('task1A')}>Start</button>
          </div>
          <div className='version'>
            Wersja B
            <button onClick={() => navigate('task1B')}>Start</button>
          </div>  
        </div>
    </div>
  )
}

export default Welcome