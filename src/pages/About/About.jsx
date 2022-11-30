import styles from './About.module.css'

function About() {
  return (
    <main className={styles.about}>
        <section>
          <img 
            src='./carolkang.jpeg'
            alt="carol-kang"
            className="self-img" 
          />
          <p>Movement and fluidity is something I think about when creating with clay, whether it is sculpture or functional. I welcome the responsiveness of the clay, which inspires new evolutions in my work</p>
          
          <p>For sculpture and decorative vessels, I work primarily on the wheel, often throwing pieces and combining them into one seamless work.</p>
          
          <p>The tableware I make is intended to be interlaced with daily living, becoming reflections of our lives.</p>

      </section>
    </main>
  )
}

export default About