import styles from './Contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <main className={styles.contact}>
      <section>
        <h1>HELLO!</h1>
        <h2>Please don't hesitate to connect to find out more. </h2>

        <article>

          <a href="mailto:hello@carolkang.com" target="_blank" rel="noreferrer" alt="Carol Kang email">
            <span>
              <p><FontAwesomeIcon icon={faEnvelope}/></p>
              <p>Email</p>
            </span>
          </a>
        </article>
      </section>
    </main>
  )
}

export default Contact