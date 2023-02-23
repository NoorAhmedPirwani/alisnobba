import { Link, Outlet } from 'react-router-dom';
import styles from './NavBar.module.css';
import logo from '../../Images/Logo.png';
import cart from '../../Images/Cart.png';
const NavBar = ()=>{
  return (
    <>
    <nav className={styles.navbar}>
        <div className={styles.logo}>
        <Link to="/">
          <img className={styles.image} src={logo} alt="Logo" />
        </Link>
        <div>
        <h1 className={styles.mainheading}>Ali Snooba</h1>
        <h1 className={styles.subheading}>Fancy Stuff for Rich Folks</h1>
        </div>
        </div>
        <Link to="/cart">
          <img className={styles.cart} src={cart} alt="Logo" />
        </Link>

    </nav>
    <Outlet/>
    
</>
  );
}

export default NavBar;