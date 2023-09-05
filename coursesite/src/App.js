import { createContext, useEffect, useState } from 'react';
import './App.css';
import Form from './component/Form';
import ReactSwitch from 'react-switch';
import Nav from './component/Nav';
import { Route,Routes, useNavigate} from 'react-router-dom';
import Home from './pages/Home';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from './utils/firebase';

import Login from './component/Login';
import Register from './component/Register';

export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState("dark");
  const toogleTheme = () => {
    setTheme(
      (curr) => (curr === "light" ? "dark" : "light")
    )
  }

 const [user,loading] = useAuthState(auth);

 const route = useNavigate();

//  useEffect(() => {route("/form/login")},[route])



  return (
    <ThemeContext.Provider value={{theme , toogleTheme}}>

    


      <div className="App" id={theme}>

        <Nav/>

        <Routes>
          {/* <Route > */}
          <Route path='/home' element={<Home/>}/>
          <Route path='/form' element={<Form/>}>
                <Route path="login" element={<Login/>}/>
                <Route path="signup" element={<Register/>}/>
          </Route>
        </Routes>

        


        <div className="switch">
        <label> {theme === 'light' ? "Light mode" : "Dark mode"} </label>
        <ReactSwitch onChange={toogleTheme} checked={theme === 'dark'} />
        </div>


      </div>


   
    






    

    </ThemeContext.Provider>
  );
}

export default App;
