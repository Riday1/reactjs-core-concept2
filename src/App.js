import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';




function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name}></User>)
      }
    </div>
  )
}


function User(props) {
  return (
    <div>
      <h3>Name : {props.name}</h3>
    </div> 
  )
}



function Counter() {
  const [count, setCount] = useState(12);
  const increaseCount = () => setCount(count + 1)
  const decreaseCount = () => setCount(count - 1)
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}


/* 
{
  const products = [
    { name: 'laptop', price: 20000, color: 'red' },
    { name: 'iphone', price: 21000, color: 'gray' },
    { name: 'washing machine', price: 30000, color: 'gray' },
    { name: 'bed', price: 34000, color: 'chocolate' }
  ]
  const persons = ['sabit', 'shorif', 'shishir']

        products.map(product => <Product name={product.name} price={product.price} color={product.color}></Product>)

      }
      {
        persons.map(person => <Person name="Mr. bean"></Person>)
      }

*/



function Product(props) {
  return (
    <div className='product'>
      <h2>Product Name : {props.name} </h2>
      <h3>Price : {props.price}</h3>
      <h3>Color : {props.color}</h3>
    </div>
  )
}

function Person(props) {
  return (
    <div className='person'>
      <h3>Name: {props.name}</h3>
    </div>
  )
}



export default App;
