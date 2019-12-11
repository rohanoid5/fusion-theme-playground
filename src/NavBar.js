import React, { useState, useEffect } from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import VisualComponent from './VisualComponent';

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 200
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

const OptionList = ['Chart', 'Plot', 'Axis', 'Legend'];
const ScopeList = ['Global', 'Column2D', 'Pie2D', 'Area'];

const NavBar = ({ mobileOpen, handleDrawerToggle }) => {
  const classes = useStyles();
  const theme = useTheme();

  const [state, setState] = useState({
    scope: 'Global'
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);

  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
  };

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel ref={inputLabel} htmlFor="outlined-input">
            Please select a scope
          </InputLabel>
          <Select
            native
            value={state.scope}
            onChange={handleChange('scope')}
            labelWidth={labelWidth}
            inputProps={{
              name: 'scope',
              id: 'outlined-input'
            }}
          >
            {ScopeList.map(scope => (
              <option id={scope} key={scope} value={scope}>
                {scope}
              </option>
            ))}
          </Select>
        </FormControl>
      </div>
      <Divider />
      <List>
        {OptionList.map((text, index) => (
          <VisualComponent key={text} name={text} />
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
};

export default NavBar;
