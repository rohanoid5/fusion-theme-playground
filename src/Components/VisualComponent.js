import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { themeObject } from '../Config/Constants';

import Input from './Input';

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column'
  },
  card: {
    padding: theme.spacing(0),
    margin: theme.spacing(1),
    backgroundColor: theme.palette.type === 'light' ? '#E6E6E6' : '#222222'
  },
  title: {
    fontSize: 16
  },
  popover: {
    position: 'absolute',
    zIndex: '2'
  },
  cover: {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px'
  },
  description: {
    fontSize: 14
  }
}));

const VisualComponent = ({ id, name }) => {
  const classes = useStyles();
  const [isExpanded, setExpanded] = useState(false);

  const handleListExpansion = () => {
    setExpanded(!isExpanded);
  };

  const renderAttributes = Object.keys(themeObject.theme.chart).map(
    attribute => {
      let res = attribute.replace(/([A-Z])/g, ' $1');
      let name = res.charAt(0).toUpperCase() + res.slice(1);
      return (
        <Input
          key={name}
          name={name}
          attribute={themeObject.theme.chart[attribute]}
          classes={classes}
        />
      );
    }
  );

  return (
    <div key={id}>
      <ListItem button onClick={handleListExpansion}>
        {/* <ListItemIcon>
          <InboxIcon />
        </ListItemIcon> */}
        <ListItemText primary={name} />
        {isExpanded ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {renderAttributes}
        </List>
      </Collapse>
      <Divider />
    </div>
  );
};

export default VisualComponent;
