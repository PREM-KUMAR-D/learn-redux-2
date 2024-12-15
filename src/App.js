
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { Fragment, useEffect } from 'react';
import Notification from './components/UI/Notification';
import { sendCartData } from './store/cart-slice';

let isInitial = true;

function App() {
  const isCartIsVisible = useSelector((state) => state.ui.cartIsVisible);

  const cart = useSelector(state => state.cart);
  const notification = useSelector(state=>state.ui.notification);
  
  const dispatchFunc = useDispatch();

  useEffect(() => {


    if(isInitial){
      isInitial=false;
      return;
    }
    dispatchFunc(sendCartData(cart));

  }, [cart,dispatchFunc])



  return (
    <Fragment>
      {notification && <Notification
        status={notification.status}
        title={notification.title}
        message={notification.message}
      />}
    <Layout>
      {isCartIsVisible && <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;