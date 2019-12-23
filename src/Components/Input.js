import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Slider from '@material-ui/core/Slider';
import Switch from '@material-ui/core/Switch';

import { RANGE, PICKER, BOOLEAN, OPTIONS } from '../Config/Constants';

const Input = ({ name, attribute, classes }) => {
  const renderInput = () => {
    switch (attribute.type) {
      case RANGE:
        return (
          <Slider
            defaultValue={30}
            valueLabelDisplay="auto"
            step={1}
            min={0}
            max={100}
          />
        );
      case BOOLEAN:
        return (
          <Switch
            checked={true}
            // onChange={handleChange('checkedB')}
            // value="checkedB"
            color="primary"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <ListItem className={classes.nested}>
      <ListItemText primary={name} />
      {renderInput()}
    </ListItem>
  );
};

export default Input;
