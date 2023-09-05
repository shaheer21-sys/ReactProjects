import React from 'react';
import { Link,useMatch,useResolvedPath } from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../utils/firebase';

function Nav() {

 const [user,loading] = useAuthState(auth);

  return (
    
    <nav className='nav'>

        <Link to="/home" className='site-name'>Learn with Sha</Link>

        <ul>
          <CustomLink to="/home">Home</CustomLink>

          {!user &&(
            (<CustomLink to="/form/login">Login</CustomLink>) 
            // ||(<CustomLink to="/form/signup">Login</CustomLink>)
          ) }
          

          {user && (
            <div>
              <Link to={"/home"}>
              <img className='profile-pic' src={user.photoURL} alt="avatar" referrerPolicy='no-referrer'/>
              </Link>
              {/* <p style={{color:'white',margin:'0'}}>{user.displayName}</p> */}
            </div>
          )}

            {/* <li className='active'> <Link to="/home" className='homePage'> Home </Link> </li>
            <li > <Link to="/login" className='loginPage'> Login  </Link> </li> */}
        </ul>
    
    
    </nav>
    
    
    
  )
}


export const CustomLink = ({to,children,...props}) => {
 const reolvedPath = useResolvedPath(to);
 const isActive = useMatch({path: reolvedPath.pathname, end : true})
  return(
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>{children}</Link>
    </li>
  )

}

export default Nav