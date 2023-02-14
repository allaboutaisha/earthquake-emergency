import { Link } from 'react-router-dom';
import * as UserService from '../../utilities/users-service'
// import UserLogOut from './UserLogOut';

export default function NavBar({ setUser, cart }) {
    function handleLogOut() {
        UserService.logOut()
        setUser(null)
    }
    if (cart) console.log(cart.totalQty)
  return (
    <nav>
      <Link to="/orders">Order History</Link> 
      <Link to="/home">Home</Link> 
      {/*  /home */}
      <Link to="/orders/cart">Cart</Link>
      <Link to='' onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}
