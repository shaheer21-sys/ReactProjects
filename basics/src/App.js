import { useEffect, useState } from "react";
import Card from "./Card";
import Axios from 'axios';


function SuperHeros (){
  const [hero, setHero] = useState(["black panther" , "Ironman"]);
  const [name , setName] = useState (() => "antman");

  const addNames = () =>{
    setHero([...hero, name])
    setName("")

  }

  return (
    <div>

      <input type="text" 
      value={name}
      onChange={(e) => setName(e.target.value)}/>
      <button onClick={addNames}>Add hero</button>

      <ul>
        {hero.map(
          (h) => ( <li key={h}>{h}</li> )
        )}
      </ul>
    </div>
  )
}


function Counter(){
  let [count , setCount] = useState(0);

  function plus() {
    setCount(count + 1 )
  }

  function minus() {
    setCount(count - 1 )
  }

  return(
    <div>
      <h2>count :{count} </h2>
      <button onClick={plus}  style={{width:'200px', fontSize:'40px', borderRadius:'15px', border:'none', color:'white',margin:'10px', backgroundColor:'red'}}>+</button>
      <button onClick={minus} style={{width:'200px', fontSize:'40px', borderRadius:'15px', border:'none', color:'white',margin:'10px', backgroundColor:'blue'}}>-</button>
    </div>
  )
}

 

function App() {
  const [details, setDetails] = useState({})


  //function to fetch data
  const fetchDetails = async () => {
   //{data}-destructuring because to target a specific property in the json received 
    const {data} = await Axios.get('https://randomuser.me/api/' , {})
    console.log("response" , data);
    const details = data.results[0];
    setDetails(details);
  }

  let list = ["jhonny", "shreemith"]

  useEffect(() => {fetchDetails();} , [])
  return (
    <>
    <h1>hello world</h1>
    <Counter/>
    <SuperHeros/>
    <Card myName="shaheer" myList={list} details={details} />
    <button onClick={fetchDetails}>Get Details</button>

    </>
  );
}

export default App;
