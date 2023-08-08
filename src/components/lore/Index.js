import React, { useEffect, useState } from 'react';
import Logo from "../.././img/logo-gojo.png";
import './style.css';

const Index = () => {

    const [arcs, setArcs] = useState([]);

    useEffect(() => {
        fetch('/data.json') // Caminho relativo à raiz pública
          .then(response => response.json())
          .then(data => setArcs(data.arcs))
          .catch(error => console.error('Error fetching data:', error));
      }, []);

  return (
    <div className='lore'>
        <div className='logo'>
            <img src={Logo} alt="" width='75px' height='75px' />
            <h1>Jujutsu Man</h1>
        </div>
        <div>
             <div className='loreButtons'>
                <button>Arcos</button>
                <button>Lugares</button>
                <button>Clãs</button>
                <button>Personagens</button>
            </div>
        </div>
        <div className='lore-card'>
            <ul>
                {arcs.map(arc => (
                    <li key={arc.id}>
                        <div className="card">
                        <img src={arc.img} alt={arc.title} width='250px' height='250px' />
                        <div className='description'>
                        <h2>{arc.title}</h2>
                        <p>{arc.history}</p>
                        </div>
                        </div>
                    </li>
                ))}
            </ul>
       </div>
    </div>
  )
}

export default Index