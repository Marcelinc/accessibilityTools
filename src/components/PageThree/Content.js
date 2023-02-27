import React from 'react'
import Herb from '../../resource/logo2b.png'
import UczelniaLiderow from '../../resource/uczelnia_liderow.png'
import {FaFacebookF,FaInstagram,FaTiktok} from 'react-icons/fa'
import {AiOutlineYoutube} from 'react-icons/ai'
import Radio from '../../resource/radio.jpeg'
import ENG from '../../resource/en.png'
import Tools from './Tools'

export const Content = ({version}) => {
  return (
    <main>
      <div className='container'>
        <div className='content'>
          <h1>Karkonoska Akademia górą!</h1>
          <p>
            Piękna lokalizacja, urokliwy kampus, wykwalifikowana kadra, centrum akademickie w zabytkowym mieście z tradycjami - taka jest 
            Karkonoska Akademia Nauk Stosowanych w Jeleniej Górze.
          </p>
          <button>Sprawdź Więcej</button>
        </div>
        <div id='uczelnia-liderow'>
          <img src={Herb} alt='herb'/>
          <img src={UczelniaLiderow} alt='uczelniaLiderow'/>
        </div>
        <div id='social-links'>
          <div className='link' id='fb'><FaFacebookF/></div>
          <div className='link' id='tt'><FaTiktok/></div>
          <div className='link' id='inst'><FaInstagram/></div>
          <div className='link' id='yt'><AiOutlineYoutube/></div>
          <div id='radio'><img src={Radio} id='radio-img' alt='radioNaglos'/></div>
        </div>
        <div id='language'>
          <Tools version={version}/>
          <img src={ENG} alt='EN' id='flag'/>
          <span id='lang'>EN</span>
        </div>
      </div>
    </main>
  )
}
