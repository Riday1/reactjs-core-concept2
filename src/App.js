import logo from './logo.svg';
import './App.css';

const productstyle = {
  backgroundColor: 'lightpink',
  padding: '20px',
  margin: '20px',
  border: '4px solid maroon',
  borderRadius: '15px'

}

function App() {


  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
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

function Counter() {
  return (
    <div>
      <h1>Count: </h1>
    </div>
  )
}

export default App;
