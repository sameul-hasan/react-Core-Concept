import Counter from './counter';
import User from './user';
import './App.css'

function App() {

  function handelClick(){
    alert(`I am clicked`)
  }
  const handleClick3 = ( ) => {
    alert (`Clicked 3`)
  }
  const handelAdd5 = (n) => {
    const result = n + 5 ;
    alert (`The result is ${result}`);
  }

  return (
    <>
      <Welcome></Welcome>
      <User></User>
      <Counter></Counter>
      <button onClick={handelClick} >Click me</button>
      <button onClick={() => handelAdd5(3)} >Add 5</button>
      <button onClick={handleClick3} >Click me 3</button>
    </>
  )
}

function Welcome() {  
  return(

  <h2>Welcome to Samuel's Journey</h2>

  ) 
}

export default App
