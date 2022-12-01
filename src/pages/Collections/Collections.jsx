import styles from './Collections.module.css'
import CollectionList from "../../components/CollectionList"
import { collections } from "../../data/collections"

function Collections() {
  return (
    <main className={styles.collections}>
      <h1>COLLECTIONS</h1>
      <section>
        <CollectionList collections={collections} />
      </section>
    </main>
  )
}

export default Collections