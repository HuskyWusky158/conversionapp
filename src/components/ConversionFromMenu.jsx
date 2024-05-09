import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ConversionFromMenu() {
  const [From, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 300 }}>
      <FormControl fullWidth>
        <InputLabel id="From" style={{ color: 'white' }}>From</InputLabel>
        <Select
          labelId="From"
          id="demo-simple-select"
          value={From}
          label="From"
          onChange={handleChange}
          style={{ backgroundColor: '#3f51b5', color: 'white' }}
        >
          <MenuItem value={10}>Cups</MenuItem>
          <MenuItem value={20}>Ounces</MenuItem>
          <MenuItem value={30}>Tablespoons</MenuItem>
          <MenuItem value={30}>Grams</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
