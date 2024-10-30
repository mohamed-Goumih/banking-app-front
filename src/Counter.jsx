import { useState } from 'react';

import React from 'react'

export default function Counter() {

    const [count,setCount]=useState(0)

    //fonction pour incrementer

    const incrementer=()=>{
        setCount(count+1);
    }

  return (
    <>
    <div>Counter</div>
    <p>la valeur du compteur :{count}</p>
    <button onClick={incrementer}>Compteur</button>
    </>

    

  )
}
