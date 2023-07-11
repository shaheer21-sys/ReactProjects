import React from 'react'

function Card({myName , myList, details}) {
  // console.log(props);
  return (
   <>
   <div>MyName</div>
   
   <ul>
    {myList.map((l) => (
      <li key={l}>{l}</li>
    ))}
   </ul>

    
   <h1>{details.name?.first}</h1>   
   <h2>{details.gender}</h2>

   </>
  )
}

export default Card