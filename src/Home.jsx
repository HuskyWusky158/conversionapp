import { useEffect, useState } from 'react'
import { Box, color } from '@mui/system';
import Alert from '@mui/material/Alert';
import Header from './components/Header'
import './App.css';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import ConversionFromMenu from './components/ConversionFromMenu'
import ConversionToMenu from './components/ConversionToMenu'
import AppBar from './components/AppBar'
import axios from 'axios';

function Home() {
  const [value, setValue] = useState("")
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  const [result, setResult] = useState("")
  const [quote, setQuote] = useState("")

  useEffect(()=>{
    getQuote()
  }, [])

  const clearTextField = () => {
    setValue('');
    setResult('');
  };

  const submitForm = () => {

    const postData = {
      value: value,
      to: to,
      from: from,
    };

    console.log(postData)
    //https://email-server-smoky.vercel.app/emailServer
    
    axios.post('http://localhost:3010/conversion', postData)
      .then(response => {
        console.log('Result:', response.data.result);
        setResult(response.data.result)
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  const getQuote = (event) => {
    // event.preventDefault();
    axios.get('http://localhost:5002/get_quote')
      .then(response => {
        console.log('Quote:', response.data.result);
        setQuote(response.data.quote)
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }


  return (
    <div className="App">
      <AppBar />
      <Header />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '1rem',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
            <ConversionFromMenu setFrom={setFrom} from={from} />
            <ConversionToMenu setTo={setTo} to={to} />
          </Box>
          <TextField
            id="outlined-basic"
            label="Enter Your Data for Conversion"
            variant="outlined"
            style={{ backgroundColor: '#3f51b5', color: 'white', }}
            InputLabelProps={{ style: { color: 'white' } }} // Custom color for the label text
            InputProps={{ style: { color: 'white' } }}
            value={value}
            onChange={(event) => {
              setValue(event.target.value);

            }}
          />
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
          Result: {result}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
            <Button
              variant="contained"
              style={{ backgroundColor: '#3f51b5', color: 'white' }}
              onClick={submitForm}
            >
              submit
            </Button>

            <Button
              variant="contained"
              style={{ backgroundColor: '#3f51b5', color: 'white' }}
              onClick={clearTextField}
            >
              Clear
            </Button>
          </Box>
          <Alert variant="filled" severity="warning">
            Pressing clear will delete your data and you will have to start over
          </Alert>
        </Box>
      </Box>

      <Box>{quote}</Box>

    </div>
  )
}

export default Home

