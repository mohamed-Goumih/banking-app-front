import React, { useState } from 'react'


function Person() {

//style CSS

const style={
color:"red",
fontSize:16,
BackgroundColor:"green"
}

    const [name,setName]=useState("");
    const [age,setAge]=useState(18);

  return (
    <>
    <div>Person</div>

<input type='text' placeholder='entrez lz nom'  onChange={(e)=>setName(e.target.value)}/>
    <p style={style}>le nom de la personne est :{name}</p>
<input type='text' placeholder='entrez age '  onChange={(e)=>setAge(e.target.value)}/>

    <p style={style}>l'age de la personne est :{age}</p>

    </>
  )
}

export default Person