import React, { useEffect, useState } from 'react';
import X from "../../.././img/out.png";
import './style.css';

const Index = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => setCharacters(data.data.characters))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const openPopUp = (id) => {
        setCharacters(prevCharacters => prevCharacters.map(characters => {
            if (characters.id === id) {
                return { ...characters, popUpState: true };
            }
            return { ...characters, popUpState: false };
        }));
    }

    const closePopUp = (id) => {
        setCharacters(prevCharacters => prevCharacters.map(characters => {
            if (characters.id === id) {
                return { ...characters, popUpState: false };
            }
            return characters;
        }));
    }

    return (
        <div className="lore-characters">
            <div className='lore-card-characters'>
                <ul>
                    {characters.map(characters => (
                        <li key={characters.id}>
                            {characters.popUpState ? (
                                <div className="popUpCard-characters" >
                                    {/* Conteúdo do popup */}
                                    <div className='content-characters'>
                                        <img className='card-up-characters' src={characters.img2} alt={characters.title} height="356px" width="468px" />
                                        <div>
                                            <h2>{characters.name}</h2>
                                            <p>{characters.description}</p>
                                            <div className='personal-characteristics'>
                                                <p><span className='purple-text'>Alcunha: </span> {characters.nickname}</p>
                                                <p><span className='purple-text'>Idade: </span> {characters.age}</p>
                                                <p><span className='purple-text'>Altura: </span> {characters.height}</p>
                                                <p><span className='purple-text'>Grau: </span>{characters.grade}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <img className='image-x-characters' src={X} onClick={() => closePopUp(characters.id)} alt="" />
                                </div>
                            ) : (
                                <div className='card-characters' >
                                    {/* Conteúdo do card normal */}
                                    <img src={characters.img} alt={characters.title} width='250px' height='250px' />
                                    <div className='description-characters'>
                                        <h2>{characters.name}</h2>
                                        {characters.description.length > 100 ? (
                                            <p>{characters.description.slice(0, 200) + '. Veja mais clicando no botão'}</p>
                                        ) : (
                                            <p>{characters.description}</p>
                                        )}
                                        <button onClick={() => openPopUp(characters.id)}>Veja Mais</button>
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