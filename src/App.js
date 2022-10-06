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
  const products = [
    { name: 'laptop', price: 70000, color: 'black' },
    { name: 'iphone 11', price: 34000, color: 'black' },
    { name: 'Computer', price: 29999, color: 'black' },
    { name: 'Su-35', price: 10000, color: 'black' },
    { name: 'apache helicoper', price: 20000, color: 'black' },
    { name: 'nuclear Boomb', price: 30000, color: 'black' },
    { name: 'j-20', price: 5000, color: 'black' },
    { name: "vt-5 light tank", price: 20000, color: 'black' }
  ]
  return (
    <div className="App">

      {/* <Product name="laptop" price="50000"></Product>
      <Product name="iphone" price="100000"></Product>
      <Product name="Computer" price="45000"></Product>
      <Product name="Su-35" price="10000"></Product> */}

      {
        products.map(product => <Product name={product.name} price={product.price} color={product.color}></Product>)
      }

    </div>
  );
}



function Product(props) {
  return (

    <div style={productstyle}>
      <h3>Product Name : {props.name} </h3>
      <p>Product Price : {props.price}</p>
      <p>Product Color : {props.color}</p>
    </div>
  )
}

export default App;
