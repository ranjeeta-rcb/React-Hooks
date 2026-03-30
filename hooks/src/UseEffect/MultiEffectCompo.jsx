import React, { useEffect, useState } from 'react'

const MultiEffectCompo = () => {

    const [count,setcount]=useState(0);
    const [seconds,setSeconds]=useState(0);


    useEffect(()=>{
        console.log('Count changed:', count);
    },[count]); 
useEffect(()=>{
    const intervalId=setInterval(()=>{
        console.log("Set interval executed")
        setSeconds(prevSeconds=>prevSeconds+1);
    },1000);

    return ()=> {
        console.log("Time to stop");
        clearInterval(intervalId);
    }
},[]);

  return (
    <div> 
        <h1>Count: {count}</h1>
        <button onClick={()=> setcount(count+1)}>Increment count</button>
        <h2>Seconds: {seconds}</h2>
    </div>
  )
}

export default MultiEffectCompo