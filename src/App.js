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
    { name: 'laptop', price: 70000 },
    { name: 'iphone 11', price: 34000 },
    { name: 'Computer', price: 29999 },
    { name: 'Su-35', price: 10000 },
    { name: 'apache helicoper', price: 20000 },
    { name: 'nuclear Boomb', price: 30000 },
    { name: 'j-20', price: 5000 },
    { name: "vt-5 light tank", price: 20000 }
  ]
  return (
    <div className="App">

      {/* <Product name="laptop" price="50000"></Product>
      <Product name="iphone" price="100000"></Product>
      <Product name="Computer" price="45000"></Product>
      <Product name="Su-35" price="10000"></Product> */}

      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }

    </div>
  );
}



function Product(props) {
  return (

    <div style={productstyle}>
      <h3>Product Name : {props.name} </h3>
      <p>Product Price : {props.price}</p>
    </div>
  )
}

export default App;
