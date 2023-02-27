import React, { useState } from 'react'
import { FaWheelchair } from 'react-icons/fa' 

const ToolsMenu = () => {

    const [show,setShow] = useState(false)

  return (
    <div className='toolmenu'>
        <FaWheelchair onClick={() => setShow(true)}/>
        {show && <section className='menu-popup'>
          tools
        </section>}
    </div>
  )
}

export default ToolsMenu