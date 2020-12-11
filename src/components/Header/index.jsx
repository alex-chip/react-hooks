import React, { useState, useContext } from 'react'
import './Header.css'
import ThemeContext from '../../context/ThemeContext'

const Header = () => {
  const [darkMode, setDarkMode] = useState(false)
  const { theme, setTheme } = useContext(ThemeContext)

  const handleClick = () => {
    setDarkMode(!darkMode)
    setTheme(!theme)
  }


  const HeaderClasses = theme
    ? 'is-light'
    : 'is-dark'

  const HeaderButton = theme
    ? 'Button-isLight'
    : 'Button-isDark'

  return (
    <div className={'Header ' + HeaderClasses}>
      <h1 className='Header__title'>ReactHooks</h1>
      <button
        className={'Button ' + HeaderButton}
        type='button'
        onClick={handleClick}
      >
        {darkMode ? 'Dark Mode' : 'Light Mode'}
      </button>
    </div>
  )
}

export default Header