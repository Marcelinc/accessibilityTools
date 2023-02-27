import React from 'react'
import { Link } from 'react-router-dom'
import { SlMagnifier } from 'react-icons/sl'

const Nav = () => {
  return (
    <nav>
        <div className='logo'>
            KANS
        </div>
        <div className='links'>
            <Link>Uczelnia</Link>
            <Link>Studenci</Link>
            <Link>Kandydaci</Link>
            <Link>Centrum Akademickie</Link>
            <Link>Pracownicy</Link>
            <Link>Wydziały</Link>
            <Link>Niepełnosprawni</Link>
            <Link>Kontakt</Link>
        </div>
        <SlMagnifier className='magnifier'/>
    </nav>
  )
}

export default Nav