function Mylist({liste})
{
return (
      <>
        <ul>
            {
              liste.map((i,index)=>(
                <li key={index}>{index}:{i}</li>
              ))
            }
        </ul>
      </>
    )
}
export default Mylist