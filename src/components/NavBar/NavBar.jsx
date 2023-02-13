import { Link } from 'react-router-dom';
import * as UserService from '../../utilities/users-service'

export default function NavBar() {
  return (
    <nav>
      <Link to="/orders">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new">New Order</Link>
    </nav>
  );
}
