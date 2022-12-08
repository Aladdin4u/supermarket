import { Link } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {
    return ( 
        <nav>
          <h1 className="nav-title">SuperM</h1>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About us</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/cart" className="nav-link"><Button type="button" text="Cart" bgcolor="red" /></Link>
        </div>
      </nav>
    );
}
 
export default Navbar;