import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const items = useSelector(state => state.manage.items);
  console.log(items)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items && items.map(x => <CartItem
          item={{ title: x.id, quantity: x.quantite, total: x.prix * x.quantite, price: x.prix }}
        />)}

      </ul>
    </Card>
  );
};

export default Cart;
