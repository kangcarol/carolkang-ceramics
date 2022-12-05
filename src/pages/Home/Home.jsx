import styles from './Home.module.css'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <main className={styles.home}>
      <div>
      <h1>CAROL KANG CERAMICS</h1>
      <ul>
        <li><Link to='/collections'>COLLECTIONS</Link></li> 
        <li><Link to='/about'>ABOUT</Link></li>
        {/* <li><Link to='/contact'>CONTACT</Link></li> */}
      </ul>
      </div>
    </main>
  )
}

export default Home