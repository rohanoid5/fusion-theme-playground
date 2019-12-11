import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import InboxIcon from '@material-ui/icons/MoveToInbox';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const attributeList = ['Background Color', 'Div Lines', 'Background Alpha'];

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

const VisualComponent = ({ id, name }) => {
  const classes = useStyles();
  const [isExpanded, setExpanded] = useState(false);

  const handleListExpansion = () => {
    setExpanded(!isExpanded);
  };

  const renderAttributes = attributeList.map(attribute => (
    <ListItem key={attribute} button className={classes.nested}>
      <ListItemIcon>
        <StarBorder />
      </ListItemIcon>
      <ListItemText primary={attribute} />
    </ListItem>
  ));

  return (
    <div key={id}>
      <ListItem button onClick={handleListExpansion}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
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
