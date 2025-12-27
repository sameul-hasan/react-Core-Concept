import Counter from './counter';
import User from './user';
import Friends from './friends';
import './App.css'
import { Suspense, use } from 'react';

const userData = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())

const friendsData = async() => {
  const data = await fetch ('https://jsonplaceholder.typicode.com/users');
  return data.json();
}

function App() {

  const dost = friendsData();

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
      <Suspense fallback={<h2>friends are coming...</h2>}> 
        <Friends dost = {dost}></Friends>
      </Suspense>
      <Suspense fallback={<h2>Loading users...</h2>}> 
        <User userData = {userData}></User>
      </Suspense>
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
