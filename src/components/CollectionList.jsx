import CollectionsPreview from "./CollectionsPreview"

const CollectionList = (props) => {
  return (
    <>
      {props.collections.map((collection, idx) =>
          <CollectionsPreview
            collectionImages={collection.images}
            collectionTitle={collection.title}
            collectionDescription={collection.description}
            key={idx}
          />
      )}
    </>
  )
}

export default CollectionList