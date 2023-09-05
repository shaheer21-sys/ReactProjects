import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <>
        <p className='sign' align="center">Sign Up</p>
        <input className="username" type="text" placeholder='Email id'/>
        <input className="password" type="password" placeholder='Password'/>
        <br />
        <a className='submit' href='#' align="center" >Sign Up</a>
        <p  className="forgot" align="center" >
                {/* <a href="#">Forget Password?</a> */}
                <Link to={"/form/login"} >Sign in</Link>
            </p>
    </>
  )
}

export default Register