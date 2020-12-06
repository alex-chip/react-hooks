import React, { useState, useEffect } from 'react'
import './Character.css'

const Characters = () => {
  const [ characters, setCharacters ] = useState([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(data => setCharacters(data.results))
  }, [])

  return (
    <div className='Characters'>
      {characters.map(character => (
        <div className='Character__container'>
          <img className='Character__img' src={character.image} alt={character.name} />
          <div className='Character__info'>
            <h3 className='Character__name'>{ character.name }</h3>
            <p className='Character__species'><strong>Species: </strong> { character.species }</p>
            <p className='Character__status'><strong>Status: </strong>{ character.status }</p>
            <p className='Character__gender'><strong>Gender: </strong>{ character.gender }</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Characters