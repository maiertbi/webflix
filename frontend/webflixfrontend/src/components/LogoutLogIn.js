import React, { Component, useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

const LogoutLogIn = () =>{

    {/*const { auth, setAuth } = useContext();
    const [ email, setEmail ] = useState('');
const [ password, setPassword ] = useState('');*/}


    return (
      <div className='login-wrapper'>
      <div className='login-card'>
          Please login to access the page
          {/*<Input
              title='Email'
              type='email'
              value={email || ''}
              placeholder='Enter your email'
          />*/}
          {/* <Input
             title='Password'
              type='password'
              value={password || ''}
              placeholder='Enter your password'
          />*/}
          <div className='actions'>
              <Button>Login</Button>
          </div>
          {/*<p>Do you want to join our dj community? Create an account <Link to='/registration'>now</Link></p>*/}
      </div>
    </div>
    )
  };
  export default LogoutLogIn;