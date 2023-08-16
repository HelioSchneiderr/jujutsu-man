import React, { useEffect, useState } from 'react';
import X from "../../.././img/out.png";
import './style.css';

const Index = () => {

    const [clans, setClans] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => setClans(data.data.clans))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const openPopUp = (id) => {
        setClans(prevClans => prevClans.map(Clans => {
            if (Clans.id === id) {
                return { ...Clans, popUpState: true };
            }
            return { ...Clans, popUpState: false };
        }));
    }

    const closePopUp = (id) => {
        setClans(prevClans => prevClans.map(Clans => {
            if (Clans.id === id) {
                return { ...Clans, popUpState: false };
            }
            return Clans;
        }));
    }

    return (
        <div className="lore">
            <div className='lore-card'>
                <ul>
                    {clans.map(clans => (
                        <li key={clans.id}>
                            {clans.popUpState ? (
                                <div className="popUpCardClans" >
                                    {/* Conteúdo do popup */}
                                    <div className='contentClans'>
                                        <img className='card-up' src={clans.img2} alt={clans.title}  height="356px" width="468px"/>
                                        
                                        <div>
                                            <h2>{clans.title}</h2>
                                            <p>{clans.description}</p>
                                            <h4>Lider - {clans.boss}</h4>
                                        </div>
                                    </div>
                                    <img className='image-x-clans' src={X} onClick={() => closePopUp(clans.id)} alt="" />
                
                                    
                                </div>
                            ) : (
                                <div className='card' >
                                    {/* Conteúdo do card normal */}
                                    <img src={clans.img} alt={clans.title} width='250px' height='250px' />
                                    <div className='description'>
                                        <h2>{clans.title}</h2>
                                        {clans.description.length > 100 ? (
                                            <p>{clans.description.slice(0, 200) + '. Veja mais clicando no botão'}</p>
                                        ) : (
                                            <p>{clans.description}</p>
                                        )}
                                        <button onClick={() => openPopUp(clans.id)}>Veja Mais</button>
                                    </div>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Index;