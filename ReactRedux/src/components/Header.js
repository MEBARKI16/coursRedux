import classes from './Header.module.css';
import { useDispatch } from 'react-redux';
import { ActionAuth } from '../store';
import { useSelector } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();
  const x = useSelector(state => state.auth.isAuthentificated)
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            {x && <button onClick={() => { dispatch(ActionAuth.logout()) }}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
