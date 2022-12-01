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
              <img
                src={collection.image1}
                alt={collection.title}
              />

              <img
                src={collection.image2} 
                alt={collection.title}
              />

              {(collection.image3) ? <img
                src={collection.image3} 
                alt={collection.title}
              /> : ''}


              {(collection.image4) ? <img
                src={collection.image4} 
                alt={collection.title}
              /> : ''}

              {(collection.image5) ? <img
                src={collection.image5} 
                alt={collection.title}
              /> : ''}

              {(collection.image6) ? <img
                src={collection.image6} 
                alt={collection.title}
              /> : ''}

          </div>
        </section>
      </main> 
    </>
  )
}

export default CollectionDetail