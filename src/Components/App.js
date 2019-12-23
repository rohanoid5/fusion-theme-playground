import React, { useState } from 'react';
import './App.css';

// Material-UI stuff
import { createMuiTheme, useTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// TODO: Create a separate file for this
import Blue from '@material-ui/core/colors/blue';
import Green from '@material-ui/core/colors/green';

// Custom Components
import Home from './Home';

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

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={muiThemeApp}>
      <CssBaseline />
      <div className="App">
        <Home mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      </div>
    </ThemeProvider>
  );
}

export default App;
