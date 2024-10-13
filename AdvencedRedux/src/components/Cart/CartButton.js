import classes from './CartButton.module.css';
import { actionCart } from '../../store';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const CartButton = (props) => {
  const x = useSelector(state => state.manage.totalQuantite)
  const dispatch = useDispatch();
  return (
    <button className={classes.button} onClick={() => { dispatch(actionCart.handleShow()) }}>
      <span>My Cart</span>
      <span className={classes.badge}>{x}</span>
    </button>
  );
};

export default CartButton;
