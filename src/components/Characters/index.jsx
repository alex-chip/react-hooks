import React, { useContext, useEffect, useMemo, useReducer, useRef, useState } from 'react'
import ThemeContext from '../../context/ThemeContext'
import IconSearch from '../../icons/iconSearch/index'
import Favorites from '../Favorites/index'
import './Character.css'

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
  const [search, setSearch] = useState('')
  const searchInput = useRef(null)

  const handleClick = favorite => {
    distpach({ type: 'ADD_TO_FAVORITE', payload: favorite})
  }

  // capturamos el valor del input, es este caso el input text de la busqueda
  const handleSearch = () => {
    setSearch(searchInput.current.value)
  }

  // se filtra los nombre, comparando el listado completo con el valor ingresado en la caja de busqueda
  // const filteredUsers = characters.filter((user) => {
  //   return user.name.toLowerCase().includes(search.toLowerCase())
  // })

  // Filtro de nombre usando useMemo
  const filteredUsers = useMemo(() =>
    characters.filter((user) => {
      return user.name.toLowerCase().includes(search.toLowerCase())
    }),
    [characters, search]
  )



  // Toggle de clases para el darkMode
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
      <section className="Wrapper">
        <Favorites favorites={favorites} />
        <div className="Search">
          <input
            ref={searchInput}
            id='search__input'
            placeholder='Buscar'
            type="text"
            className="Search__input"
            value={search}
            onChange={handleSearch} />
          <IconSearch/>
        </div>
      </section>
      <section className={'Characters ' + CharactersClasses}>
        {filteredUsers.map(character => (
          <article key={character.id} className={'Character__container ' + CharactersClasses}>
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
          </article>
        ))}
      </section>
    </>
  )
}

export default Characters