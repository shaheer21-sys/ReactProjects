import React from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
// import Form from '../component/Form';


function Home() {

 const [user,loading] = useAuthState(auth);

 const route = useNavigate();

 if(loading) return <h1>Loading...</h1>

 if(!user) return route("/login");

  return (
    <div className='home'>
      <h1>Welcome {user?.displayName}</h1> 
      <button className='sign-out' onClick={() => auth.signOut()}>Sign Out</button>
    </div>

  )
}

export default Home