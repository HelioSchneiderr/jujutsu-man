import React, { useEffect, useState } from 'react';
import Logo from "../.././img/logo-gojo.png";
import X from "../.././img/out.png";
import './style.css';

const Index = () => {

    const [arcs, setArcs] = useState([]);
    const [blur, setBlur] = useState(true)
    

    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => setArcs(data.arcs))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const togglePopUp = (id) => {
        setArcs(prevArcs => prevArcs.map(arc => {
            if (arc.id === id) {
                return { ...arc, popUpState: !arc.popUpState } ;    
            }
            return arc;
        }));
        setBlur(false)
    }

    return (
        <div  className="lore">
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
                            {arc.popUpState ? (
                                <div className="popUpCard">
                                    <img className='card-up' src={arc.img} alt={arc.title} width='250px' height='250px' />
                                    <div>
                                        <h2>{arc.title}</h2>
                                        <p>{arc.history}</p>
                                    </div>
                                    <img className='image-x' src={X} onClick={() => togglePopUp(arc.id)} alt="" />
                                </div>
                            ) : (
                                <div className='card' >
                                    <img src={arc.img} alt={arc.title} width='250px' height='250px' />
                                    <div className='description'>
                                        <h2>{arc.title}</h2>
                                        {arc.history.length > 100 ? (
                                            
                                            <p>{arc.history.slice(0, 200) + '. Veja mais clicando no botão'}</p>) : (<p>arc.history</p>)}
                                        <button onClick={() => togglePopUp(arc.id)}>Veja Mais</button>
                                    </div>
                                    
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Index;
