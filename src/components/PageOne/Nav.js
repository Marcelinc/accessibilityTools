import React from 'react'
import { Link } from 'react-router-dom'
import {SlMagnifier} from 'react-icons/sl'
import {TbGridDots} from 'react-icons/tb'
import Tools from './Tools'

const Nav = ({version}) => {
  return (
    <nav>
      <div className='logo'>
        {/*<Logo/>*/}
      </div>
      <div className='links'>
        <div className='top'>
          {version === 'A' && <Tools version={version}/>}
          <Link className='marked noline'>INTRANET</Link>
          <Link className='marked noline'>OPEN-UP</Link>
        </div>
        <div className='bottom'>
          <Link>Uniwersytet</Link>
          <Link>Wydziały</Link>
          <Link>Nauka</Link>
          <Link>Edukacja</Link>
          <Link>Współpraca</Link>
          <Link>Usługi</Link>
          <Link className='marked'>Rekrutacja</Link>
          <div className='additional-links'>
            <Link>EN</Link>
            <Link>RU</Link>
            <Link>UA</Link>
            <SlMagnifier className='marked symbol noline' fontWeight={900}/>
            <p className='menu noline'>
              <TbGridDots className='symbol' />
              <span>Menu</span>
            </p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav