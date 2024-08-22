import React from 'react';
import { useLocalStorage } from './useLocalStrorage';
import "./modeStyles.css"

const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');
  const handleModeChange = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <div className='light-dark-mode' data-theme={theme}>
      <div className="container">
        <p>Hallo World</p>
        <button onClick={handleModeChange}>Change Theme</button>
      </div>
    </div>
  )
}

export default LightDarkMode