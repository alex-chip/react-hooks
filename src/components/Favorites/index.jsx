import React, { useContext } from 'react'
import './favorites.css'
import ThemeContext from '../../context/ThemeContext'

const Favorites = ({favorites}) => {

  const { theme } = useContext(ThemeContext)

  const FavoritesClasses = theme
    ? 'is-light'
    : 'is-dark'

  return (
    <ul className='Favorites__list'>
      {favorites.favorites.map(favorite => (
        <li className='Favorites__item' key={favorite.id}>
          <img src={favorite.image} alt={favorite.name} className={ 'Favorites__avatar ' + FavoritesClasses }/>
          {/*<p className="Favorites__name">{favorite.name}</p>*/}
        </li>
      ))}
    </ul>
  )
}

export default  Favorites