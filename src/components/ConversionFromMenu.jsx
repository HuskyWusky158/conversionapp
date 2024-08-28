import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ConversionFromMenu(props) {
  const handleChange = (event) => {
    props.setFrom(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 300 }}>
      <FormControl fullWidth>
        <InputLabel id="From" style={{ color: 'white' }}>From</InputLabel>
        <Select
          labelId="From"
          id="demo-simple-select"
          value={props.from}
          label="From"
          onChange={handleChange}
          style={{ backgroundColor: '#3f51b5', color: 'white' }}
        >
          <MenuItem value={"Cups"}>Cups</MenuItem>
          <MenuItem value={"Ounces"}>Ounces</MenuItem>
          <MenuItem value={"Tablespoons"}>Tablespoons</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
