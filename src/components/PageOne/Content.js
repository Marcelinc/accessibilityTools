import React from 'react'
import {AiFillFacebook, AiFillLinkedin, AiFillTwitterSquare, AiFillInstagram} from 'react-icons/ai'
import {TfiYoutube} from 'react-icons/tfi'
import Tools from './Tools'

const Content = ({version}) => {
  return (
    <main>
      <div className='content-text'>
        <h1>IV Międzynarodowe Sympozjum Studenckich Kół Naukowych</h1>
        <button className='registerButton'>ZAREJESTRUJ SIĘ</button>
      </div>
      <div className='context-icons'>
        <AiFillFacebook className='social-link'/>
        <AiFillLinkedin className='social-link'/>
        <TfiYoutube className='social-link'/>
        <AiFillTwitterSquare className='social-link'/>
        <AiFillInstagram className='social-link'/>
        {version === 'B' && <Tools version={version}/>}
      </div>
    </main>
  )
}

export default Content