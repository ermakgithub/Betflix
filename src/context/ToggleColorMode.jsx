import React, { createContext, useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';

export const ColorModeContext = createContext();

function ToggleColorMode( {children} ) {
  const [mode, setMode] = useState('dark');

  const theme = createTheme({palette: {mode}});

  const toggleColorMode = () => {
    setMode(prevState => (prevState === 'light' ? 'dark' : 'light'));
  };

  useEffect(() =>{
      const modeFromLocalStorage = localStorage.getItem('theme')
    if(modeFromLocalStorage){
      setMode(modeFromLocalStorage)
    }else{
      localStorage.setItem('theme','dark');
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme',mode);
  }, [mode]);

  return (
    <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default ToggleColorMode;
