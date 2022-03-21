import Navbar from './Components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Products from './Components/Products'
import Home from './Components/Home'
import Cart from './Components/Cart'
const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </>
  );
};

export default App;
