import React, { useState } from 'react';

import Slider from '@material-ui/core/Slider';
import Switch from '@material-ui/core/Switch';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { ChromePicker } from 'react-color';
import Button from '@material-ui/core/Button';

import { RANGE, PICKER, BOOLEAN, OPTIONS } from '../Config/Constants';

const Input = ({ name, attribute, classes }) => {
  const [color, setColor] = useState({
    r: '186',
    g: '186',
    b: '28',
    a: '1'
  });
  const [isEnabled, setEnabler] = useState(
    attribute.type === BOOLEAN ? !!+attribute.default : false
  );
  const [rangeValue, setRangeValue] = useState(
    attribute.type === RANGE ? +attribute.default : 30
  );

  const handleColorChange = color => {
    setColor({
      r: color.rgb.r,
      g: color.rgb.g,
      b: color.rgb.b,
      a: color.rgb.a
    });
  };

  const handeEnabler = () => setEnabler(!isEnabled);

  const renderInput = () => {
    switch (attribute.type) {
      case RANGE:
        return (
          <Slider
            defaultValue={rangeValue}
            valueLabelDisplay="auto"
            onChange={(_, v) => setRangeValue(v)}
            step={1}
            min={0}
            max={100}
          />
        );
      case BOOLEAN:
        return (
          <Switch
            checked={isEnabled}
            onChange={handeEnabler}
            value="checkedB"
            color="primary"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
        );
      case PICKER:
        return (
          <div>
            <Typography
              className={classes.description}
              color="textSecondary"
              gutterBottom
            >
              Selected color is:{'    '}
              <span
                style={{
                  marginLeft: 8,
                  width: 8,
                  height: 8,
                  backgroundColor: `rgba(${color.r},${color.g}, ${color.b}, ${color.a})`,
                  borderRadius: 99,
                  color: `rgba(${color.r},${color.g}, ${color.b}, ${color.a})`
                }}
              >
                12
              </span>
            </Typography>
            <ChromePicker
              color={{ r: color.r, g: color.g, b: color.b, a: color.a }}
              onChange={handleColorChange}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          {name}
        </Typography>
        <CardActions
          style={{
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {renderInput()}
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default Input;
