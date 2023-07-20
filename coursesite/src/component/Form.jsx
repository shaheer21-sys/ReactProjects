import React from 'react';
import {FcGoogle} from 'react-icons/fc';
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
// import { Link } from 'react-router-dom';

import {auth} from '../utils/firebase'
function Form() {
  
  const googleProvider = new GoogleAuthProvider();

 
  const GoogleLogin = async (e) => {
    e.preventDefault();
    // console.log("triggered");
    try {
      const result = await signInWithPopup(auth,googleProvider)
      console.log(result.user);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="main">
        <p className='sign' align="center">Sign in</p>

        <form className='form1'>
         
            <input className="username" type="text" placeholder='Email id'/>
            <input className="password" type="password" placeholder='Password'/>
            <a className='submit' href='#' align="center" >Sign in</a>

            <p  className="forgot" align="center" >
                <a href="#">Forget Password?</a>
            </p>


            {/* <Link to={"/home"}> */}
            <button className='btn-google' onClick={GoogleLogin}>
              <FcGoogle size={20}/> Sign in with google 
            </button>
            {/* </Link> */}
            
        </form>
    </div>
  )
}

export default Form