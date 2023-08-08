import React from 'react'


import "./style.css"
import Logo from "../.././img/logo-gojo.png"
import Linkedin from '../.././img/icons/linkedin.png'
import Discord from '../.././img/icons/discord.png'
import Whatsapp from '../.././img/icons/whatsapp.png'
import Instagram from '../.././img/icons/instagram.png'



const index = () => {
  return (
    <>
     <div className='footer'>
        <div className='logo'>
            <img src={Logo} alt="" width='75px' height='75px' />
            <h1>Jujutsu Man</h1>
        </div>
        <div className='contact'>
            <h1>Fale Conosco</h1>
            <p>Forje seu caminho nas sombras das maldições, supere os limites como Satoru Gojou e domine a dança cósmica das técnicas amaldiçoadas em sua própria saga lendária.</p>
            <p>
                <img src={Linkedin} alt="" />
                <img src={Discord} alt="" />
                <img src={Whatsapp} alt="" />
                <img src={Instagram} alt="" />
            </p>
        </div>
     </div>
    </>
  )
}

export default index