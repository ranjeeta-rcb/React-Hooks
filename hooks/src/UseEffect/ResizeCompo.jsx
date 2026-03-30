import React, { useEffect, useState } from 'react'

const ResizeCompo = () => {
const [windowWidth, setWindowWidth]=useState(window.innerWidth);

useEffect(()=>{
    const handleResize=()=> setWindowWidth(window.innerWidth);

    console.log("Event listener added");
    window.addEventListener('resize', handleResize);

    return()=>{
         console.log("Event listener removed");
        window.removeEventListener('resize', handleResize);
    };
},[]);

  return (
    <div> 
        <h1>Window Width: {windowWidth}px</h1>
    </div>
  )
}

export default ResizeCompo