function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


const createUniqueMediaQuery = ({ crystalData, crystalIndex }) => {

  const allMediaQueryWidths = crystalData.crystals[crystalIndex]
    .mediaQueries.map(mediaQuery => mediaQuery.mediaQueryWidth)
  const checkIfValuesIsTaken = (uniqueNum) => {
    let isUniqueNum = true
    const reducer = (first, second) => {
      if (first !== uniqueNum && second !== uniqueNum)
        return second
      else
        isUniqueNum = false
    }
    if (allMediaQueryWidths.length === 0)
      return uniqueNum

    allMediaQueryWidths.reduce(reducer)

    if (isUniqueNum)
      return uniqueNum
  }

  let newMediaQueryWidthValue
  do {
    newMediaQueryWidthValue = checkIfValuesIsTaken(getRandomInt(2000))
  } while (!newMediaQueryWidthValue)

  return newMediaQueryWidthValue
}

export default createUniqueMediaQuery