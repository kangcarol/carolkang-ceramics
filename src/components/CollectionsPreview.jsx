import hyphenateWords from "../../src/utilities/hyphenateWords";
import { Link } from "react-router-dom";

const CollectionsPreview = (props) => {
  const path = hyphenateWords(props.collectionTitle)

  return (
    <>
      <section id="collection">
        <img src={props.collectionImage1} alt={props.collectionTitle}/>
        <Link to={`/collections/${path}`}>
          <h3>{props.collectionTitle}</h3>
        </Link>
      </section>
    </>
  )
}


export default CollectionsPreview