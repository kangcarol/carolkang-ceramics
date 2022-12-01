import styles from './About.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'

function About() {
  return (
    <main className={styles.about}>
        <section>
          <img 
            src='./carolkang.jpeg'
            alt="carol-kang"
            className="self-img" 
          />
          <div>
            <p>Movement and fluidity is something I think about when creating with clay, whether it is sculpture or functional. I welcome the responsiveness of the clay, which inspires new evolutions in my work.</p>
            <p>For sculpture and decorative vessels, I work primarily on the wheel, often throwing pieces and combining them into one seamless work.</p>
            <p>Objects that we choose become reflections of our lives. I create tableware that is intended to be interlaced with daily living.</p>
            <p>My studio is in Brooklyn, NY.</p>
            <hr />
            <h6>Please contact me to find out more.</h6>
            <a href="mailto:hello@carolkang.com" target="_blank" rel="noreferrer" alt="Carol Kang email"><span>
              <h6><FontAwesomeIcon icon={faEnvelope}/></h6>
              <h6>Email</h6>
            </span></a>
          </div>
      </section>
    </main>
  )
}

export default About