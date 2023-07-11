import Category from "./components/Category";
import Search from "./components/Search";
import Pages from "./pages/Pages";
import {BrowserRouter,Link} from "react-router-dom";
import styled from "styled-components";
import {GiKnifeFork} from "react-icons/gi"; 



function App() {
  return (
    <div className="App">

      
      <BrowserRouter>
      <Nav>
        <GiKnifeFork/> 
        <Logo to={'/'}>ShaRecipes</Logo>
      </Nav>
        <Search/>
        <Category/>
        <Pages/>
      </BrowserRouter>
      
    </div>
  );
}

const Logo = styled(Link)`
text-decoration:none;
font-size:1.3rem;
font-weight:400;
font-family:'Lobster Two',crusive `;

const Nav =styled.div`
padding:2rem 0rem 1rem 0rem;
display:flex;
justify-content:flex-start;
align-items:center;

svg{font-size:2rem;}`;



export default App;
