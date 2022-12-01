import hyphenateWords from "../../src/utilities/hyphenateWords";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


const CollectionsPreview = (props) => {
  const path = hyphenateWords(props.collectionTitle)

  return (
    <>
      <section id="collection">
        <img src={props.collectionImage1} alt={props.collectionTitle} />
          <article>
            <p>{props.collectionTitle}</p>
            <Link to={`/collections/${path}`}><span><FontAwesomeIcon icon={faMagnifyingGlass} />See More</span></Link>
          </article>
      </section>
    </>
  )
}


export default CollectionsPreview