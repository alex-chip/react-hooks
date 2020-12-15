import React, {useState, useEffect, useContext, useReducer} from 'react'
import './Character.css'
import ThemeContext from '../../context/ThemeContext'
import Favorites from '../Favorites/index'

const initialState = {
  favorites: []
}

const favoriteReduce = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      }
    default:
      return state
  }
}

const Characters = () => {
  const [ characters, setCharacters ] = useState([])
  const { theme } = useContext(ThemeContext)
  const [ favorites, distpach ] = useReducer(favoriteReduce, initialState)

  const handleClick = favorite => {
    distpach({ type: 'ADD_TO_FAVORITE', payload: favorite})
  }

  const CharactersClasses = theme
    ? 'is-light'
    : 'is-dark'

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(data => setCharacters(data.results))
  }, [])



  return (
    <>
      <Favorites favorites={favorites} />
      <div className={'Characters ' + CharactersClasses}>
        {characters.map(character => (
          <div key={character.id} className={'Character__container ' + CharactersClasses}>
            <img className='Character__img' src={character.image} alt={character.name} />
            <div className='Character__info'>
              <h3 className={'Character__name ' + CharactersClasses}>{ character.name }</h3>
              <p className='Character__species'><strong>Species: </strong> { character.species }</p>
              <p className='Character__status'><strong>Status: </strong>{ character.status }</p>
              <p className={'Character__gender ' + CharactersClasses}><strong>Gender: </strong>{ character.gender }</p>
            <button
              type='button'
              onClick={() => handleClick(character)}
              className={'Button Button__favorite ' + CharactersClasses}
            >Agregar a Favoritos</button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Characters