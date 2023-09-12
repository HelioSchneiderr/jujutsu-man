import React, { useRef } from 'react';
import "./style.css"
import Dice from "../.././img/dice.png"
import Book from "../.././img/book.png"

function Index({ changePage, changeLore }) {
  const section2Ref = useRef(null);

  const scrollToSection2 = () => {
    if (section2Ref.current) {
      section2Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className='section-1'>
        <div className='section-1-content'>
          <h1>Dos dados é feito o mundo</h1>
          <img src={Dice} alt="" />
        </div>
        <button onClick={scrollToSection2}>Saiba Mais</button>
      </div>
      <div ref={section2Ref} className="section-2">
        <h1>Jujutsu Man</h1>
        <p>Um emocionante RPG de mesa criado para proporcionar diversão entre amigos. Neste universo vibrante, a vida pulsa intensamente, repleto de risos compartilhados, mas também de lágrimas derramadas diante das perdas e derrotas enfrentadas juntos.</p>
      </div>
      <div className="section-3">
        <h1>Jujutsu Man Lore</h1>
        <div className='buttons-img'>
          <div>
            <button onClick={()=>{changePage(1, 1)}}>Arcos</button>
            <button onClick={()=>{changePage(1, 2)}}>Lugares</button>
            <button onClick={()=>{changePage(1, 3)}}>Clãs</button>
            <button onClick={()=>{changePage(1, 4)}}>Personagens</button>
          </div>
          <div>
            <img src={Book} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;