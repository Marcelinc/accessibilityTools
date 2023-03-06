import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../resource/logo4.png'
import LogoA from '../../resource/logo4a.png'
import {SlMagnifier} from 'react-icons/sl'
import Tools from './Tools'

const Nav = ({version}) => {
  return (
    <nav>
      <section id='top'>
        <Tools version={version}/>
        <div id='logo'>
          <img src={LogoA} alt='Uniwersytet Wrocławski' id='uniwersytet-logo'/>
          <img src={Logo} alt='Uczelnia Badawcza' id='uczelnia-badawcza'/>
        </div>
        <div id='top-links'>
          <span>USOSweb</span>
          <span>Intranet</span>          
          <div id='searchbar'>
            <input type='text' placeholder='Szukaj'/>
            <SlMagnifier/>
          </div>
        </div>
      </section>
      <section id='bottom'>
        <span>UNIWERSYTET</span>
        <span>BADANIA</span>
        <span>STUDIA</span>
        <span>SPOŁECZNOŚĆ</span>
        <span>WSPÓŁPRACA</span>
      </section>
    </nav>
  )
}

export default Nav