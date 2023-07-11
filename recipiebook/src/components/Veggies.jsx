import { useEffect, useState } from "react";
import styled from "styled-components";
import {Splide , SplideSlide} from '@splidejs/react-splide'; 
import '@splidejs/react-splide/css';
import {Link} from 'react-router-dom';

function Veggies() {

  const [veggie, setVeggie] = useState([])


    useEffect(() => {
        getVeggie();
    } , [])



    const getVeggie = async() => {
        //getting the popular state variable if it is present in the local storage 
        const check = localStorage.getItem("veggie");

        //if the popular variable data is present in local storage then send the same data to setPopular state variable 
        if(check){
          setVeggie(JSON.parse(check));
        }
        else{
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
            const data = await api.json();
            
            //setting one item into local storage
            localStorage.setItem("veggie", JSON.stringify(data.recipes));
            setVeggie(data.recipes);
            
        }
        
    };
  return (
    <div>

        <Wrapper>
            <h3>Our Vegetarian Picks</h3>

            <Splide 
                options={{
                perPage:3,
                arrows:false,
                pagination:false,
                drag:"free",
                gap:"5rem", 
            }}>
                {veggie?.map((recipe) => {
                    return (
                        <SplideSlide key={recipe.id}>
                            <Card>
                            <Link to={'/recipe/' + recipe.id}>
                                <p>{recipe.title}</p>
                                <img src={recipe.image} alt={recipe.title} />
                                <h1>Hello from veggie</h1>
                                <Gradient/>
                            </Link>
                            </Card>
                        </SplideSlide>
                    );
                })}
            </Splide>

        </Wrapper>  

    </div>
  )
}


const Wrapper = styled.div`
margin:2rem 0rem;
`;

const Card = styled.div`

min-height:15rem;
border-radius: 2rem;
overflow: hidden;
position:relative;

p{
    color:white;
    position:absolute;
    z-index:10;
    left:50%;
    bottom:0%;
    transform: translate(-50%,0);
    width:100%;
    text-align:center;
    font-weight:600;
    font-size:0.7rem;
    height:40%;
    display:flex;
    justify-content:center;
    align-item:center;
    
}

img{
    border-radius:2rem;
    width:100%;
    height:100%;
    position:absolute;
    left:0;
    object-fit:cover;
    
}
`;

const Gradient = styled.div`
z-index:3;
position : absolute ;
width:100%;
height:100%;
background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));`;
export default Veggies