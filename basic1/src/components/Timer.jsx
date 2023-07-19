import React, { useEffect, useState } from 'react';
const Timer = ({start}) =>{
    const [clock , setClock] = useState(null);
  
    const ticker = async () =>{
        const startFromLS = await localStorage.getItem('start');
   
        if(startFromLS){
            setClock(Date.now() - startFromLS);
        }
        else{
            await localStorage.setItem("start",start)
            setClock(Date.now() - startFromLS);
            
        }
    }
    
  
    const dummy = () =>{
        
        setInterval(() => {
            ticker();
            // console.log("triggeered");

        },1000);
      
      
    }
    //re-renders for every small change
    useEffect(dummy,[dummy]);

    window.addEventListener('beforeunload',(event) => {
        if(!event.currentTarget.performance.navigation.type === 1){
            //the above condition returns 1 if the navigation type is reload or refresh
            localStorage.clear();
        }
    });



    const formatTime = time => {
             const hours = Math.floor(time / 3600); // Calculate hours
             const minutes = Math.floor((time % 3600) / 60); // Calculate minutes
             const seconds = time % 60; // Calculate seconds
        
             return `${hours.toString().padStart(2, '0')}:
                     ${minutes.toString().padStart(2, '0')}:
                     ${seconds.toString().padStart(2, '0')}`; // Format the time as "hh:mm:ss"
           };

  
    return (
    <>
      <h1>Tht amount of you spent on this website is :</h1>
      <h1>{formatTime(Math.round(clock/1000))}</h1>
      
    </>
      
    )
  }
export default Timer