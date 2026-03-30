import React, { createContext, use, useMemo, useRef, useState } from 'react'
import  './App.css'
import { useEffect } from 'react'
import LoggerCompo from './UseEffect/LoggerCompo'
import TimeCompo from './UseEffect/TimeCompo'
import DataFetcher from './UseEffect/DataFetcher'
import ResizeCompo from './UseEffect/ResizeCompo'
import MultiEffectCompo from './UseEffect/MultiEffectCompo'
import ChildA from './UseContext/ChildA'
import './App.scss';  


// export const UserContext = createContext();

// export const ThemeContext=createContext();

const App = () => {

  //------------------------ USE EFFECT -----------------------

  // const [count, setCount]=useState(0);
  // const [total, setTotal]=useState(1);

  //**** variation:1 ****
  // useEffect(() => {
  //   alert("run on each render")
  // })

  //**** variation:2 ****

//   useEffect(() => {
    
// alert("runs only at the time of 1st render");
//   },[])
  
//**** variation:3 ****

// useEffect(() => {
//   alert("runs when count get updated");
// }, [count])

//**** variation:4 ****
//multiple dependencies
// useEffect(() => {
//  alert("runs when count/total get updated");
// }, [count,total ])

//**** variation:5 ****
//is baarlet's add a cleanup function
// useEffect(() => {
//   alert("count is updated");

//   return () => {
//     alert("count is unmounted from UI");
//   }
// }, [count])


//   function handleClick(){
//     setCount(count+1);
//     setTotal(total+1);
//   }

//   function handleClickTotal(){
//     setTotal(total+1);
//   }
  

//-------------------- USE CONTEXT -----------------

// const [user, setUser] =useState({name: "Ram"});

// const [theme, setTheme]=useState('light');


//-------------------- USE REF -----------------
// const [count,setCount]=useState(0);
// let val=useRef(0);

// let btnRef=useRef();

// function handleCount(){
//   val.current=val.current+1;
//   console.log("The values is:", val.current);
//   setCount(count+1);
// }

// useEffect(()=>{
//   console.log("Again im getting rendered");
// })

// function changeColor(){
// btnRef.current.style.backgroundColor="red";
// }


//--------------------- ask of stopwatch using useref------------
// const [time,setTime]=useState(0);
// let timerRef=useRef(null);

// function startTimer(){
//   timerRef.current=setInterval(() => {
//     setTime(time=>time+1);
//   }, 1000);
// }

// function stopTimer(){
// clearInterval(timerRef.current);
// timerRef.current=null;
// }
// function resetTimer(){
// stopTimer();
// setTime(0);
// }

// --------------------- USE MEMO ------------------------

const [count,setCount]=useState(0);
const [input,setInput]=useState(0);

function expensiveTask(num){
console.log("inside expensive task",num);
for(let i=0;i<=100000000;i++){}
return num*2;
}

const doubleValue=useMemo(()=>{
  return expensiveTask(input);
},[input]);
  return (
    <div>


{/* ------------------- USE EFFECT ------------------------ */}

      {/* <LoggerCompo/> */}
      {/* <TimeCompo/> */}
      {/* <DataFetcher/> */}
      {/* <ResizeCompo/> */}
      {/* <MultiEffectCompo/> */}

      {/* <button onClick={handleClick}>
       Update count
      </button>
      <br />
      Count is: {count}

         <button onClick={handleClickTotal}>
       Update Total
      </button>
      <br />
      Total is: {total} */}


{/* ------------------- USE CONTEXT ------------------------ */}
 
{/* <UserContext.Provider value={user}>
<ThemeContext.Provider value={{theme,setTheme}}>
  <div className='container' style={{backgroundColor: theme==='light'? "beige" : "purple"}}>
    <ChildA/>
  </div>
</ThemeContext.Provider>
</UserContext.Provider> */}


{/* -------------------- USER REF ----------------- */}

{/* <div className='container1'>
<button className='btn1' ref={btnRef} onClick={handleCount}>
  Increment
</button>
<br />
<br />

<button className='btn2' onClick={changeColor}>
  Change the Color of 1st Button
</button>
<br />
<div className='count'>
  Count is: {count}
</div>
</div> */}

{/* --------------- Task of stopwatch using useref ---------------- */}

{/* <div className='container2'>
  <h1>Stopwatch : {time} seconds</h1>
  <button onClick={startTimer}>
  Start
  </button>
  <br />
  <br />
  <button onClick={stopTimer}> 
    Stop
  </button>
  <br />
  <br />

  <button onClick={resetTimer}>
    Reset
  </button>
</div> */}

 
<div className='container3'>


 <button onClick={()=> setCount(count+1)}>Increment</button>
 <div>
  Count: {count}
 </div>

 <input type='number' placeholder='enter number' value={input} onChange={(e)=> setInput(Number(e.target.value))|| 0}/>

<div>
  Double: {doubleValue}
</div>
    </div>
    </div>

    
  )
}

export default App