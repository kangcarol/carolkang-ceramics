import styles from './Home.module.css'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <main className={styles.home}>
      <h1><Link to='/collections'>CAROL KANG CERAMICS</Link></h1>
      <ul>
        {/* <li><Link to='/about'>ABOUT</Link></li>
        <li><Link to='/collections'>COLLECTIONS</Link></li> 
        <li><Link to='/contact'>CONTACT</Link></li> */}
      </ul>
    </main>
  )
}

export default Home