import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// Material-UI stuff
import { createMuiTheme, useTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// TODO: Create a separate file for this
import Blue from '@material-ui/core/colors/blue';
import Green from '@material-ui/core/colors/green';
import Container from '@material-ui/core/Container';

function App() {
  const [theme, setTheme] = useState({
    palette: {
      type: 'dark',
      primary: Blue,
      secondary: Green
    },
    status: {
      danger: 'orange'
    }
  });
  const toggleDarkTheme = () => {
    let newPaletteType = theme.palette.type === 'light' ? 'dark' : 'light';
    setTheme({
      palette: {
        type: newPaletteType,
        primary: Blue,
        secondary: Green
      },
      status: {
        danger: 'orange'
      }
    });
  };
  const muiThemeApp = createMuiTheme(theme);

  return (
    <ThemeProvider theme={muiThemeApp}>
      <CssBaseline />
      <Container maxWidth="sm">
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
