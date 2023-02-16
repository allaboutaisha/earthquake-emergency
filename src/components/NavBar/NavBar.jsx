import { Link } from 'react-router-dom';
import * as UserService from '../../utilities/users-service';
import './NavBar.css';
// import UserLogOut from './UserLogOut';

export default function NavBar({ user, setUser, cart }) {
    function handleLogOut() {
        UserService.logOut()
        setUser(null)
    }
// const cartTotalQty = cart && cart.totalQty ? cart.totalQty : '';
const cartLabel = cart && cart.totalQty > 0 ? `CART [${cart.totalQty}]` : 'CART';
  return (
    <nav>
        <div id='welcome'>WELCOME <span style={{ fontStyle: 'italic' }}>{user.name}</span></div>
        <Link to="/home">HOME</Link>
        <Link to="/orders">ORDER HISTORY</Link> 
        <Link to="/orders/cart">{cartLabel}</Link>
        <Link to='' onClick={handleLogOut}>LOG OUT</Link>
    </nav>
  );
}
