
import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const isCartIsVisible=  useSelector((state)=>state.ui.cartIsVisible);

  

  return (
    <Layout>
      {isCartIsVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;