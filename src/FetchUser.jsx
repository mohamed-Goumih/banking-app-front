import React, { useCallback, useEffect, useState } from 'react'

function FetchUser() {

 //Modifier la valeur de User

 const [id,setId]=useState("Loading...")
 const [name,setName]=useState("Loading...")

    const fetching=useCallback(()=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve({id:1,name:"Mike"});
            },2000);
        });
    },[])

    useEffect(()=>{
        fetching().then((user)=>{
          setId(user.id);
          setName(user.name);
        });
    },[])

  return (
    <div>
    
    <p>ID du User :{id}</p>
    <p>Name du User :{name}</p>
     


    </div>
  )
}

export default FetchUser