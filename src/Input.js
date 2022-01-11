import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Input = (props) => {
  return (
    <center>
    
        <TextField
          type="number"
          id="outlined-basic"
          label="BIRDS"
          variant="outlined"
          required
        />
     
    </center>
  );
};
export default Input;
