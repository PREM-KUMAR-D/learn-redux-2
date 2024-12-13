import classes from './CartItem.module.css';

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;

  const handlePlusClick =(event)=>{
    
  }

  const handleMinusClick = (event)=>{

  }


  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handlePlusClick}>-</button>
          <button onClick={handleMinusClick}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
