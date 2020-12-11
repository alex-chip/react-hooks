import React, { useState, useEffect, useContext } from 'react'
import './Character.css'
import ThemeContext from "../../context/ThemeContext";

const Characters = () => {
  const [ characters, setCharacters ] = useState([])
  const { theme } = useContext(ThemeContext)

  const CharactersClasses = theme
    ? 'is-light'
    : 'is-dark'

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(data => setCharacters(data.results))
  }, [])

  return (
    <div className={'Characters ' + CharactersClasses}>
      {characters.map(character => (
        <div key={character.id} className={'Character__container ' + CharactersClasses}>
          <img className='Character__img' src={character.image} alt={character.name} />
          <div className='Character__info'>
            <h3 className={'Character__name ' + CharactersClasses}>{ character.name }</h3>
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