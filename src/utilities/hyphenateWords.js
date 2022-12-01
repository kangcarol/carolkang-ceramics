function hyphenateWords(str) {
  return str.replace(/[_' ]/g, '-').toLowerCase()
}

export default hyphenateWords
