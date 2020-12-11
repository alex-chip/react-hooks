import React, { useState} from 'react'
import Header from './components/Header/index'
import Characters from './components/Characters/index'
import './App.css'
import ThemeContext from "./context/ThemeContext";

const App = () => {
  const [theme, setTheme] = useState(false)

  const BodyClasses = theme
    ? 'is-light'
    : 'is-dark'

  console.log(BodyClasses)
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={'App ' + BodyClasses}>
        <Header />
        <Characters />
      </div>
    </ThemeContext.Provider>
  );
}

export default App
