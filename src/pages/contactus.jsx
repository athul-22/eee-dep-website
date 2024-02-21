import React from 'react';
import { TextField, Card, CardContent, Typography, Button, Divider } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import RoomIcon from '@mui/icons-material/Room';

const Contactus = () => {
  return (
    <div style={{backgroundColor:'#e7e4dd'}}>
    <div style={{paddingTop:'20px'}}>
    <p style={{
        backgroundImage: 'linear-gradient(144deg, #4065f6, #00d7a3)',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        textAlign: 'center',
        fontSize:'40px',
        fontWeight:'bold',
      }}>Contact Us</p>
    </div>
    
    <Card
      sx={{
        backgroundColor: '#e7e4dd',
        padding: '1.5rem',
        display: 'grid',
        gridGap: '1.5rem',
        gridTemplateColumns: '1fr',
        '@media (min-width: 600px)': {
          gridTemplateColumns: 'repeat(2, 1fr)',
        },
      }}
    >

     
      <div style={{ display: 'grid', gridGap: '1.5rem' }}>
        <Card
          sx={{
            borderRadius: '10px',
            '& .MuiTextField-root': {
              borderRadius: '20px',
              '& fieldset': {
                borderColor: '#eee',
                transition: 'border-color 0.3s',
              },
              '&:hover fieldset': {
                borderColor: '#1381ff',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#1381ff',
              },
            },
          }}
        >
          <CardContent style={{ display: 'grid', gridGap: '0.75rem' }}>
            <label htmlFor="phone">Phone number</label>
            <TextField variant="outlined" fullWidth id="phone" placeholder="Phone number" />
          </CardContent>
        </Card>
        <Card
          sx={{
            borderRadius: '10px',
            '& .MuiTextField-root': {
              borderRadius: '20px',
              '& fieldset': {
                borderColor: '#eee',
                transition: 'border-color 0.3s',
              },
              '&:hover fieldset': {
                borderColor: '#1381ff',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#1381ff',
              },
            },
          }}
        >
          <CardContent style={{ display: 'grid', gridGap: '0.75rem' }}>
            <label htmlFor="email2">Email</label>
            <TextField variant="outlined" fullWidth autoComplete="email" id="email2" placeholder="Email" type="email" />
          </CardContent>
        </Card>
        <Card
          sx={{
            borderRadius: '10px',
            '& .MuiTextField-root': {
              borderRadius: '20px',
              '& fieldset': {
                borderColor: '#eee',
                transition: 'border-color 0.3s',
              },
              '&:hover fieldset': {
                borderColor: '#1381ff',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#1381ff',
              },
            },
          }}
        >
          <CardContent style={{ display: 'grid', gridGap: '0.75rem' }}>
            <label htmlFor="address">Address</label>
            <TextField variant="outlined" fullWidth multiline minRows={5} id="address" placeholder="Address" />
          </CardContent>
        </Card>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#1381ff',
            color: 'white',
            borderRadius: '20px',
            '&:hover': {
              backgroundImage: 'none',
              backgroundColor: '#4065f6',
            },
          }}
        >
          Submit
        </Button>
      </div>

      <div style={{ display: 'grid', gridGap: '1.5rem', alignItems: 'center', justifyItems: 'center' }}>
        <Card sx={{ borderRadius: '10px', backgroundColor: 'white', padding: '1.5rem', textAlign: 'center',width:'90%' }}>
          <PhoneAndroidIcon fontSize="large" color="primary" />
          <Typography variant="h5" color="primary">
            Phone
          </Typography>
          <Typography style={{color:'grey'}}>
            +91 99999999
          </Typography>
        </Card>

        <Card sx={{ borderRadius: '10px', backgroundColor: 'white', padding: '1.5rem', textAlign: 'center',width:'90%' }}>
          <MailOutlineIcon fontSize="large" color="primary" />
          <Typography variant="h5" color="primary">
            Email
          </Typography>
          <Typography style={{color:'grey'}}>
            eee__dep@christuniversity.in
          </Typography>
        </Card>

        <Card sx={{ borderRadius: '10px', backgroundColor: 'white', padding: '1.5rem', textAlign: 'center', width:'90%'}}>
          <RoomIcon fontSize="large" color="primary" />
          <Typography variant="h5" color="primary" >
            Address
          </Typography>
          <Typography style={{color:'grey'}}>
            5Th block 1st floor <br />
            School of engineering <br />
            Kanmanike, Kengeri, <br />
            Bangalore
          </Typography>
        </Card>
      </div>
    </Card>
    </div>
  );
};

export default Contactus;
