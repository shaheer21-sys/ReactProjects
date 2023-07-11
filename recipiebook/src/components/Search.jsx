import React, { useState } from 'react';
import styled from "styled-components";
import {FaSearch} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Search() {

   const [input,setInput] =useState("");
   const navigate =useNavigate();

   const submitHandler = (e) =>{
    e.preventDefault();
    navigate("/searched/"+input);
   };
  return (
    <FormStyle onSubmit={submitHandler}>
      <FaSearch></FaSearch>
      <div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
      
      </div>

        
    </FormStyle>
  )
}


const FormStyle= styled.form`
 margin : 0 17rem;
 position : relative;
 widht:100%;

 div{
  width:100%
  position:relative;
 }

 input{
  width:100%;
    border:none;
    background:linear-gradient(35deg,#494949,#313131);
    font-size:1.2rem;
    color:white;
    padding:0.7rem 3rem;
    border:none;
    border-radius:0.7rem;
    outline:none;
    // margin-bottom:1rem;

 }

 svg{
  position:absolute;
  top:50%;
  transform:translate(100%,-50%);
  color:white;

 }
`;
export default Search