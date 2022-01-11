import React, { useState, useRef, forwardRef, createRef } from 'react';

import './style.css';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import styled, { css } from 'styled-components';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Input from './Input';
import Dashboard from './Dashboard';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';

const useStyles = makeStyles({
  btn: {
    backgroundColor: 'rose',
  },
});
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const Navbar = () => {
  const theme = useTheme();
  const handleSubmit = (e) => {
    /* console.log(nobref);
    alert(nobref.current.value);
    return false;*/

    setNumberOfBirds(nobref.current.value);

    setValue(1);
    e.preventDefault();
  };
  const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.primary &&
    css`
    background: palevioletred;
    color: white;
  `}
`;

  const [value, setValue] = useState(0);
  let [numberOfBirds, setNumberOfBirds] = useState(0);
  const BirdsInput = forwardRef((props, ref) => (
    //<Input ref={ref} {...props} />
    <input
      ref={ref}
      type="number"
      id="outlined-basic"
      label="BIRDS"
      variant="outlined"
      required
    />
  ));
  let nobref = useRef(null);
  //const nobref = createRef();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const classes = useStyles();

  return (
    <nav className="navbar">
      <Box sx={{ bgcolor: 'background.paper', flexGrow: 1 }}>
        <AppBar position="static">
          <Typography variant="h6" color="inherit" component="div">
            <Tabs
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Input" {...a11yProps(0)} />
              <Tab label="Dashboard" {...a11yProps(1)} />
            </Tabs>
          </Typography>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <form onSubmit={handleSubmit}>
              Birds on lake <BirdsInput ref={nobref} />
              <Button
                primary
                className={classes.btn}
                type="submit"
                color="primary"
                variant="Contained"
              >
                SEND
              </Button>
            </form>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            Last 10 values <Dashboard nob={numberOfBirds} />
          </TabPanel>
        </SwipeableViews>
      </Box>
    </nav>
  );
};

export default Navbar;
