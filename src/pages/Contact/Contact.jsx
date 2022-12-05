import styles from './Contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <main className={styles.contact}>
      {/* <img 
        src='./fold1.png'
        alt="carol-kang"
      /> */}
      <section>
        <h1>HELLO</h1>
        <h3>PLEASE REACH OUT TO FIND OUT MORE. </h3>
        <a href="mailto:hello@carolkang.com" target="_blank" rel="noreferrer" alt="Carol Kang email">
          <span>
            <p><FontAwesomeIcon icon={faEnvelope}/></p>
            <p>EMAIL</p>
          </span>
        </a>
      </section>
    </main>
  )
}

export default Contact