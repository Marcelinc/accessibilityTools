import React from 'react'
import {SlMagnifier} from 'react-icons/sl'
import {BiChevronRight} from 'react-icons/bi'
import { IconContext } from 'react-icons'
import ContrastASquare from '../accessibilityTools/ContrastASquare'
import { useNavigate } from 'react-router-dom'
import Tools from './Tools'

const Content = ({version}) => {
  return (
    <main>
        <div className='content-text'>
            <span id='text-line'></span>
            <h1 className='context-link'>STUDIUJ NA POLITECHNICE POZNAŃSKIEJ</h1>
            <p className='context-link'>
              ZOBACZ KIERUNKI 
              <BiChevronRight className='chevron'/>
            </p>
        </div>
        <div className='options'>
          <label className='input-container'>
            PL
            <input type='radio' name='lang' defaultChecked={true} ></input>
            <span className='checkmark'></span>
          </label>
          <label className='input-container'>
            EN
            <input type='radio' name='lang' ></input>
            <span className='checkmark'></span>
          </label>
          <label className='input-container'>
            RU
            <input type='radio' name='lang' ></input>
            <span className='checkmark'></span>
          </label>
          <label className='input-container'>
            CN
            <input type='radio' name='lang' ></input>
            <span className='checkmark'></span>
          </label>
          <div className='searchbar'>
            <input type='text'></input>
            <IconContext.Provider value={{style:{ fontWeight: 'bolder', fontSize: '20px' },className:'searchbar-magnifier'}}>
              <SlMagnifier/>
            </IconContext.Provider>
          </div>
          <Tools version={version}/>
        </div>
    </main>
  )
}

export default Content