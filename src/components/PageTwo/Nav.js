import React from 'react'
import { Link } from 'react-router-dom'
import LogoEunice from '../../resource/LogoEUNICE.png'
import Logo from '../../resource/logo2a.png'
import Logo2 from '../../resource/logo2b.png'

const Nav = () => {
  return (
    <nav>
        <div className='logo'>
            <img src={Logo} alt='logo' id='logo'/>
            <img src={Logo2} alt='godlo' id='godlo'/>
        </div>
        <div className='links'>
            <Link>UCZELNIA</Link>
            <Link>KSZTAŁCENIE</Link>
            <Link>BADANIA</Link>
            <Link>BIZNES</Link>
            <Link>PRACOWNICY</Link>
            <Link>KONTAKTY</Link>
        </div>
        <Link id='eunice-link'>
          <img src={LogoEunice} alt='EUNICE' id='eunice'/>
        </Link> 
    </nav>
  )
}

export default Nav