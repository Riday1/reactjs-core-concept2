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
  const Aircrafts = [
    { name: "Su-35", price: "1000", color: "cemoFlag", origin: "Russia" },
    { name: "Rafale", price: "2000", color: "gray", origin: "Franch" },
    { name: "Tyfun", price: "1500", color: "light gray", origin: "Eupore" },
    { name: "Birakter Tb-2", price: "10", color: "skey blue", origin: "Tukiye" },
    { name: "Mig-29", price: "1800", color: "comb. of blue and Dark blue", origin: "Russian" }
  ]

  return (
    <div className="App">

      {
        Aircrafts.map(aricraft => <Product name={aricraft.name} price={aricraft.price} color={aricraft.color} origin={aricraft.origin}></Product>)
      }

    </div>
  );
}



function Product(props) {
  // console.log(props)
  return (

    <div className='product'>
      <h1>Product Name : {props.name} </h1>
      <h3>Product Price : {props.price}</h3>
      <h3>Product color : {props.color}</h3>
      <p>Origin : {props.origin}</p>

    </div >
  )
}

export default App;
