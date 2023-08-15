import React from 'react'
import { useState, useEffect } from 'react';
import X from "../../.././img/out.png";

const Index = () => {


    const [locals, setLocals] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => setLocals(data.data.locals))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const togglePopUp = (id) => {
        setLocals(prevArcs => prevArcs.map(locals => {
            if (locals.id === id) {
                return { ...locals, popUpState: !locals.popUpState } ;    
            }
            return locals;
        }));
    }


  return (
    <>
        <div  className="lore">
            
            <div className='lore-card'>
                <ul>
                    {locals.map(locals => (
                        <li key={locals.id}>
                            {locals.popUpState ? (
                                <div className="popUpCard" >
                                    <img className='card-up' src={locals.img2} alt={locals.title} width='250px' height='250px' />
                                    <div>
                                        <h2>{locals.title}</h2>
                                        <p>{locals.description}</p>
                                    </div>
                                    <img className='image-x' src={X} onClick={() => togglePopUp(locals.id)} alt="" />
                                </div>
                            ) : (
                                <div className='card' >
                                    <img src={locals.img} alt={locals.title} width='250px' height='250px' />
                                    <div className='description'>
                                        <h2>{locals.title}</h2>
                                        {locals.description.length > 100 ? (
                                            
                                            <p>{locals.description.slice(0, 200) + '. Veja mais clicando no botão'}</p>) : (<p>{locals.description}</p>)}
                                        <button onClick={() => togglePopUp(locals.id)}>Veja Mais</button>
                                    </div>
                                    
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    
    </>
  )
}

export default Index