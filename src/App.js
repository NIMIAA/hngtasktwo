import './App.css';
import './Media.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Shop';
import Cart from './Cart';
import Checkout from './Checkout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Shop/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          
          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
