import React from 'react';
import  {useEffect} from 'react';
import {FcGoogle} from 'react-icons/fc';
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { Link, Outlet, Route,Routes, useNavigate } from 'react-router-dom';
import {auth} from '../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Login from './Login';
import Register from './Register';


function Form() {

  const route = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const [user, loading] = useAuthState(auth);


 
  const GoogleLogin = async (e) => {
    e.preventDefault();
    // console.log("triggered");
    try {
      const result = await signInWithPopup(auth,googleProvider)
      console.log(result.user);
      route("/home")
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if(user){
      route('/home')
    }
    // else if(!user){
    //   route("/form/login")
    // }
    else{
      console.log("sus");
    }
  },[user])


  // useEffect(() => {route("/form/login")},[route])



  return (
    <div className="main">

        <form className='form1'>


              

          {/* <Link to={"/form/login"} style={{color:'white'}}>login</Link> */}
                

          <Outlet/>
         
         
            {/* <Login/> */}
            {/* <Register/> */}



            <button className='btn-google' onClick={GoogleLogin}>
              <FcGoogle size={20}/> Sign in with google 
            </button>

            
        </form>
    </div>
  )
}

export default Form