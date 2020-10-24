import { crystalParallaxT } from "../constants/crystalDataTypes"

const updateMediaQueryValues = (payload, newState: crystalParallaxT, crystalIndex) => {
  // find mediaQuery by intial value and change it at for the moded (map function)
  payload.moddedMediaQueryValues.map(item => {
    newState.crystals[crystalIndex].mediaQueries.map(mediaQuery => {
      if (mediaQuery.mediaQueryWidth === item.initial)
        mediaQuery.mediaQueryWidth = item.mod
      return mediaQuery
    })
    return item
  })
  return newState
}

export default updateMediaQueryValues