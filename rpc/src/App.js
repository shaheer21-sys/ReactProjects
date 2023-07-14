import { useEffect, useState } from "react";


const App = () => {

  const [userChoice, setUserChoice] = useState([]);
  const [computerChoice, setComputerChoice] = useState([]);
  const [result, setResult] = useState(null);
  const choices = ['rock', 'paper', 'scissor'];


  const handleClick = (value) => {
    setUserChoice(value)
    generateComputerChoice();
  }

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  }

  useEffect(() => {
    switch (userChoice + computerChoice) {
      case 'scissorpaper':
      case 'rockscissor':
      case 'paperrock':
        setResult('YOU WIN 🥳');
        break;

      case 'scissorrock':
      case 'rockpaper':
      case 'paperscissor':
        setResult('YOU LOOSE 😭');
        break;

      case 'scissorscissor':
      case 'rockrock':
      case 'paperpaper':
        setResult('DRAW 🤝');
        break;

      default:
        console.log('something is wrong in your code babu shaheer');
    }
  },[computerChoice, userChoice])


  return (
    <div >
      <h1>User Choice is :{userChoice}</h1>
      <h1>Computer choice is :{computerChoice}</h1>
      {choices.map((choice, index) => {
        return (<button key={index} onClick={() => handleClick(choice)}>{choice} </button>)
      })}
      <h1>{result}</h1>
    </div>
  );
}

export default App;
