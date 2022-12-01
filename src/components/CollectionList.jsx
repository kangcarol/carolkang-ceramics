import CollectionsPreview from "./CollectionsPreview"

const CollectionList = (props) => {
  return (
    <>
      {props.collections.map((collection, idx) =>
          <CollectionsPreview
            collectionImage1={collection.image1}
            collectionImage2={collection.image2}
            collectionImage3={collection.image3}
            collectionImage4={collection.image4}
            collectionImage5={collection.image5}
            collectionImage6={collection.image6}
            collectionTitle={collection.title}
            collectionDescription={collection.description}
            key={idx}
          />
      )}
    </>
  )
}

export default CollectionList