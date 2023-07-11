import {FaPizzaSlice, FaHamburger} from "react-icons/fa";
import {GiNoodles, GiChopsticks} from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
//navlink over link because it give active status and we can use that to style 


import React from 'react'

function Category() {
  return (
    <List>
        
        <SLink to={'/cuisine/Italian'}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </SLink>
        <SLink to={'/cuisine/American'}>
            <FaHamburger/>
            <h4>American</h4>
        </SLink>
        <SLink to={'/cuisine/Thai'}>
            <GiNoodles/>
            <h4>Thai</h4>
        </SLink>
        <SLink to={'/cuisine/Japanese'}>
            <GiChopsticks/>
            <h4>Japanese</h4>
        </SLink>

    </List>
  )
}

const List = styled.div`
display:flex;
justify-content:center;
margin:1.4rem 0rem;

h4{
    font-size:0.7rem;
}`;

const SLink =styled(NavLink)`
display:flex;
flex-direction: column;
justify-content: center;
align-items:center;
border-radius:50%;
text-decoration:none;
margin-right:2rem;
background:linear-gradient(35deg,#494949,#313131);
cursor:pointer;
transform:scale(0.9);
width:4rem;
height:4rem;

h4{
    font-size:0.5rem;
    color:white;

}
svg{
    font-size:1.2rem;
    color:white;
    
}
&.active{
    background:linear-gradient(to right,#f27121,#e94057);

    svg{color:white;}
    h4{color:white;}
}

`;


export default Category