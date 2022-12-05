import hyphenateWords from "../../src/utilities/hyphenateWords";
import { Link } from "react-router-dom";

const CollectionsPreview = (props) => {
  const path = hyphenateWords(props.collectionTitle)

  return (
    <>
      <Link to={`/collections/${path}`}><div>
        <img src={props.collectionImages[0]} alt={props.collectionTitle}/>
        <h3>{props.collectionTitle}</h3>
      </div></Link>
    </>
  )
}


export default CollectionsPreview