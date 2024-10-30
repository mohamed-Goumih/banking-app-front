

function Add() {

    //fonction
   const alerte=()=>{
    alert("Button cliqué")
   }

    const objet={
        placeholder:"entrez une valeur",
        size:20,
        disabled:false,
        liste:["pomme","banana","poire","fraise"] 
    };

    return (
        <>
            <h1>Add</h1>
            <input type="text" placeholder={objet.placeholder} size={objet.size} />
            <button onClick={alerte} disabled={objet.disabled}>Ajouter</button>

            <ul>
                {objet.liste.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </>
    )
}

export default Add;