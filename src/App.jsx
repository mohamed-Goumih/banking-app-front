import Counter from "./Counter";
import FetchUser from "./FetchUser";
import Mylist from "./Mylist";
import Person from "./Person";
function App() {
  
  //variables/fonctions
  const add = (a, b) => a + b ;
  const name="Ali";
  const a=5;
  const b=10;
  const somme=add(a, b);

  //Array
  const array = [1, 2, 3, 4, 5];
const placeholder = "entez une valeur";
const size = 20;

const disabled = false;

  return (
    <>
      <h1>Hello World</h1>
      <h2>React + Vite</h2>
      <p>Bonjour { name }.</p>
      la somme de {a} et {b} est:
      <span>{ somme }</span>
    
     <ul>
      {array.map((item) => (
        <li key={item}>{item}</li>
      ))}
     </ul>

     <input type="text" placeholder={placeholder} size={size} />

     <button>{!disabled ? "Disabled" : "Enabled"}</button>

<Mylist liste={array}/> 


<Counter/>

<Person/>
<FetchUser/>
    </>
    
   
  )
}

export default App
