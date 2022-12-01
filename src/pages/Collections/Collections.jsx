import styles from './Collections.module.css'
import CollectionList from "../../components/CollectionList"
import { collections } from "../../data/collections"

function Collections() {
  return (
    <main className={styles.collections}>
      <h1>COLLECTIONS</h1>
      <CollectionList collections={collections} />
    </main>
  )
}

export default Collections