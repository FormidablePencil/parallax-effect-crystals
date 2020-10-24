import cloneDeep from 'lodash/cloneDeep';
import { mediaQueriesDataAppentionT } from '../constants/crystalDataTypes'
// crystalParallaxT
export const compile_crystalData_appropriate_to_media_query = ({ rawCrystalData, windowWidth }) => {
  let copyRawCrystalData = cloneDeep(rawCrystalData)

  copyRawCrystalData.crystals = copyRawCrystalData.crystals.map(crystal => {

    if (crystal.mediaQueries.length === 0)
      return crystal

    let mediaQueryDataGreaterThanWindowWidth: mediaQueriesDataAppentionT[] = []

    const getGreatestMediaQueryFromArr = (
      first: mediaQueriesDataAppentionT,
      second: mediaQueriesDataAppentionT
    ) => {
      if (first.mediaQueryWidth < second.mediaQueryWidth)
        return first
      else
        return second
    }


    // get media query data which has a width that is greater than window.width
    for (let i = 0; i < crystal.mediaQueries.length; i++) {
      if (crystal.mediaQueries[i].mediaQueryWidth > windowWidth) {
        mediaQueryDataGreaterThanWindowWidth.push(crystal.mediaQueries[i])
      }
    }


    if (mediaQueryDataGreaterThanWindowWidth.length === 0)
      return crystal


    const appropriate_crystal_data_of_windowWidth = mediaQueryDataGreaterThanWindowWidth.reduce(getGreatestMediaQueryFromArr)


    // appropriate_crystal_data_of_windowWidth.crystalProps could be undefined because when adding a new media query this is ommited
      return {
        ...crystal,
        ...appropriate_crystal_data_of_windowWidth,
        crystalProps: {
          ...crystal.crystalProps,
          ...appropriate_crystal_data_of_windowWidth.crystalProps,
          imageProps: {
            ...crystal.crystalProps.imageProps,
            ...appropriate_crystal_data_of_windowWidth.crystalProps.imageProps,
          }
        },
        positionInParallaxCanvas: {
          ...crystal.positionInParallaxCanvas,
          ...appropriate_crystal_data_of_windowWidth.positionInParallaxCanvas
        },
      }
  })
  return copyRawCrystalData
}

export default compile_crystalData_appropriate_to_media_query



