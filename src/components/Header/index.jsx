import React, { useState } from 'react'
import './Header.css'

const Header = () => {
  const [darkMode, setDarkMode] = useState(false)

  const handleClick = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className='Header'>
      <h1 className='Header__title'>ReactHooks</h1>
      <button className='Header__button' type='button' onClick={handleClick}>{darkMode ? 'Dark Mode' : 'Light Mode'}</button>
    </div>
  )
}

export default Header