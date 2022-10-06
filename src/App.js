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

      <Product></Product>

    </div>
  );
}



function Product() {
  return (

    <div>
      <h3>Product Name : Su - 35</h3>
      <p>Product Price : 20000</p>
    </div>
  )
}

export default App;
