import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Login() {
  return (
  <div>
    <p className='sign' align="center">Sign in</p>
        <input className="username" type="text" placeholder='Email id'/>
        <input className="password" type="password" placeholder='Password'/>
        <br />
        <a className='submit' href='#' align="center" >Sign in</a>
        <br />

            <p  className="forgot" align="center" >
                {/* <a href="#">Forget Password?</a> */}
                <NavLink to={"/form/signup"} >Sign up</NavLink>
            </p>
        
  </div>
    

  
  

        

  
  )
}

export default Login