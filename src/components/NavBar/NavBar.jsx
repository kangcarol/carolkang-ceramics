import styles from './NavBar.module.css'
import { Link, useLocation } from 'react-router-dom'

function NavBar() {
  const location = useLocation()

  return (
    <header>
      {(location.pathname ==='/') ?
        <nav className={styles.NavBar} display='none'/>
        :
        <nav className={styles.NavBar}>
          <ul>
            <li><Link to='/'>CAROL KANG CERAMICS</Link></li>
            <li><Link to='/collections'>COLLECTIONS</Link></li> 
            <li><Link to='/about'>ABOUT</Link></li>
            <li><Link to='/contact'>CONTACT</Link></li> 
          </ul>
        </nav>
      }
    </header>
  )
}

export default NavBar