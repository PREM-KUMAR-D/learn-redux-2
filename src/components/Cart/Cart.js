import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {

  const cartItems = useSelector((state)=>state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {
          cartItems.map((items)=>{
            
            return <CartItem
              

              item={{
                id: items.id, 
                title: items.name, 
                quantity: items.quantity,
                 total: items.totalPrice,
                 price: items.price }}

              key={items.id}
            />
          })
        }
      </ul>
    </Card>
  );
};

export default Cart;
