import { createContext, useState } from 'react';
import './App.css';
import Form from './component/Form';
import ReactSwitch from 'react-switch';
import Nav from './component/Nav';
import { Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from './utils/firebase';

export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState("dark");

  const toogleTheme = () => {
    setTheme(
      (curr) => (curr === "light" ? "dark" : "light")
    )
  }

 const [user,loading] = useAuthState(auth);



  return (
    <ThemeContext.Provider value={{theme , toogleTheme}}>

    


      <div className="App" id={theme}>

        <Nav/>

        <Routes>
         <Route path='/home' element={<Home/>}/>
         <Route path='/login' element={<Form/>}/>
          
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
