import './App.css';
import AppBar from './components/AppBar';
import HeaderForFeedbackPage from './components/HeaderForFeedbackPage';
import Button from '@mui/material/Button';
import axios from 'axios';
import { TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react'
import { Box } from '@mui/system';
import Alert from '@mui/material/Alert';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


function Feedback() {

    const [feedback, setFeedback] = useState("")
    const clearTextField = () => {
        setFeedback('');
        setEmail('');
        setRating('');
    };
    const [email, setEmail] = useState('');
    const [rating, setRating] = useState('');
    const [checked, setChecked] = useState(true);

    const handleCheck = (event) => {
        setChecked(event.target.checked);
    };

    const sendEmail = () => {

        const postData = {
            websiteOwnerEmail: "bax@email.arizona.edu",
            userEmail: email,
            feedback: feedback,
            feedbackRating: rating,
            requestResponse: checked
        };
        axios.post('http://localhost:3015/feedback', postData)
            .then(response => {
                console.log('Response:', response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    const handleSendFeedback = (event) => {
        event.preventDefault();
        // sendEmail();
        alert('I got your feedback. Thanks!');
        clearTextField();

    }

    return (
        <div className="hello">
            <AppBar />
            <HeaderForFeedbackPage />
            <h2>
                Your Opinion Matters to Us
            </h2>

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

                    </Box>

                    <FormControl fullWidth>
                        <InputLabel id="Rating" style={{ color: 'white' }}>Enter Your Rating</InputLabel>
                        <Select
                            labelId="Rating"
                            id="Rating"
                            value={rating}
                            label="Rating"
                            onChange={(event) => setRating(event.target.value)}
                            style={{ backgroundColor: '#3f51b5', color: 'white' }}
                        >
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        id="outlined-basic"
                        label="Enter Your Feedback"
                        variant="outlined"
                        style={{ backgroundColor: '#3f51b5', color: 'white', }}
                        InputLabelProps={{ style: { color: 'white' } }}
                        InputProps={{ style: { color: 'white' } }}
                        value={feedback}
                        onChange={(event) => {
                            setFeedback(event.target.value);

                        }}
                    />

                    <TextField
                        id="outlined-basic"
                        label="Enter Your Email (Optional)"
                        variant="outlined"
                        style={{ backgroundColor: '#3f51b5', color: 'white', }}
                        InputLabelProps={{ style: { color: 'white' } }}
                        InputProps={{ style: { color: 'white' } }}
                        value={email}
                        onChange={(event) => {
                            setEmail(event.target.value);

                        }}
                    />

                    <FormControlLabel
                        label="Request Response"
                        control={
                            <Checkbox
                                checked={checked[0] && checked[1]}
                                indeterminate={checked[0] !== checked[1]}
                                onChange={handleCheck}
                                defaultChecked
                                style={{
                                    color: 'white'
                                }}
                            />
                        }
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
                        <Button
                            variant="contained"
                            style={{ backgroundColor: '#3f51b5', color: 'white' }}
                            onClick={handleSendFeedback}
                        >
                            Send
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


        </div>
    )
}






export default Feedback

