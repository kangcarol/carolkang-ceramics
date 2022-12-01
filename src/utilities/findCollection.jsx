import { collections } from "../data/collections"
import hyphenateWords from "./hyphenateWords"

function findCollection(str){
  return collections.find(collection => hyphenateWords(collection.title)===str)
}

export default findCollection