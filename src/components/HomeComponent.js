import React from 'react'
import {Link} from 'react-router-dom'
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';

function Home(){
  return(
    <React.Fragment>
    <div>
      <div>
        <TextField id="outlined-basic" label="Enter Text to be Cartified" variant="outlined" />
      </div>
    <Button variant="contained" color="primary" spacing={20}>
  CARTIFY
    </Button>
    </div>
    </React.Fragment>

  )
}

export default Home;
