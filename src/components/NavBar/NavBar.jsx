import styles from './NavBar.module.css'
import { Link, useLocation } from 'react-router-dom'

function NavBar() {
  const location = useLocation()

  return (
    <nav className={styles.NavBar}>
      <ul>
        {(location.pathname ==='/') ? '' : <li><Link to='/'>CAROL KANG</Link></li>}
        <li><Link to='/about'>ABOUT</Link></li>
        <li><Link to='/collections'>COLLECTIONS</Link></li> 
        <li><Link to='/contact'>CONTACT</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar