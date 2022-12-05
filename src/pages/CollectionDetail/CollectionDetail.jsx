import { useParams, Link } from "react-router-dom"
import Carousel from 'react-bootstrap/Carousel';
import findCollection from "../../utilities/findCollection"
import styles from './CollectionDetail.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCode} from '@fortawesome/free-solid-svg-icons'

const CollectionDetail = () => {
  const { collectionDetail }= useParams()
  const collection = findCollection(collectionDetail)

  return (
    <>
      <main>
        <section className={styles.CollectionDetail}>
          <h2>{collection.title}</h2>
          <h3>{collection.description}</h3>

          <div>

          {collection.images.map((image, idx) => 
            <img
              src={image} 
              alt={collection.title}
              key={idx}
            /> 
          )}

          </div>
        </section>
      </main> 
    </>
  )
}

export default CollectionDetail