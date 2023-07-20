import Timer from "./components/Timer"


function App() {
  return (
    <div>
    <Timer start={Date.now()}/>
    <h1>Hello</h1>

    </div>
  )
}



export default App

// import React, { useState, useEffect } from 'react';

// function App() {
//   const [timeSpent, setTimeSpent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimeSpent(prevTimeSpent => prevTimeSpent + 1);
//     }, 1000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   const formatTime = time => {
//     const hours = Math.floor(time / 3600);
//     const minutes = Math.floor((time % 3600) / 60);
//     const seconds = time % 60;

//     return `${hours.toString().padStart(2, '0')}:
//             ${minutes.toString().padStart(2, '0')}:
//             ${seconds.toString().padStart(2, '0')}`;
//   };

//   return (
//     <div>
//       <h1>Time Spent on Website</h1>
//       <p>{formatTime(timeSpent)}</p>
//     </div>
//   );
// }

// export default App;
