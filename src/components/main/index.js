import React from 'react'
import "./style.css"

import Logo from "../.././img/logo-gojo.png"
import Dice from "../.././img/dice.png"


function index() {
  return (
    <>

        <div className='logo'>
            <img src={Logo} alt="" width='75px' height='75px' />
            <h1>Jujutsu Man</h1>
        </div>
        <div className='section-1'>
            <h1>Dos dados é feito o mundo</h1>
            <img src={Dice} alt="" />
            <button>Saiba Mais</button>
        </div>

    </>
  )
} 

export default index