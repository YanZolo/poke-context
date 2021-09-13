import React from 'react';
import { useEffect, useState, } from 'react';

const Home = () => {
    const [pokemon, setPokemon] = useState(null);
    const [idPokemon, setIdPokemon] = useState(1)


    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
            .then(res => res.json())
            .then(json => setPokemon(json))

    }, [idPokemon]);



    const handleRandomPokemon = () => {
        console.log('handleRandomPokemon started')
        const randomIdPokemon = Math.floor(Math.random() * 151) + 1
        setIdPokemon(randomIdPokemon)
    }


    console.log('pokemon', pokemon)
    console.log('idPokemon', idPokemon)
    return (
        <div className='container'>

            
            {pokemon &&
                <div className='containerInfosHome'>
                    <p>name: <span>{pokemon.name}</span></p>
                    <p>height: <span>{pokemon.height}</span></p>
                    <p>weight: <span>{pokemon.weight}</span></p>
                    <div>
                        types: 
                        {pokemon.types.map(pokemon => (

                            <li>
                                -{pokemon.type.name}
                            </li>

                        ))}
                    </div>
                    <button className='btnHome' onClick={handleRandomPokemon}>Random pokemon</button>
                </div>
            }


        </div>
    );
};

export default Home;