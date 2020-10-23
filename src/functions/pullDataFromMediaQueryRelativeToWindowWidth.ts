import { crystalParallaxT } from "../constants/crystalDataTypes"

import cloneDeep from 'lodash/cloneDeep';

const pullDataFromMediaQueryRelativeToWindowWidth = ({ rawCrystalData, windowWidth }) => {
  let retrievedMediaQueryData
  let crystalKey
  const copyRawCrystalData: crystalParallaxT = cloneDeep(rawCrystalData)

  copyRawCrystalData.crystals.map(crystal => {
    // order: if mediaQueryWidth > windowWidth with the largest mediaQueryWidth taking precedence over smaller mediaQueryWidth
    let mediaQueryGreaterThanWindowWidth = []
    const reducer = (first, second) => first < second ? first : second;
    crystalKey = crystal.key

    for (let i = 0; i < crystal.mediaQueries.length; i++) {
      if (crystal.mediaQueries[i].mediaQueryWidth > windowWidth)
        mediaQueryGreaterThanWindowWidth.push(crystal.mediaQueries[i].mediaQueryWidth)
    }
    if (mediaQueryGreaterThanWindowWidth.length > 0) {
      retrievedMediaQueryData = crystal.mediaQueries.filter(mediaQuery =>
        mediaQuery.mediaQueryWidth === mediaQueryGreaterThanWindowWidth.reduce(reducer))[0]
    } else
      retrievedMediaQueryData = crystal
    return crystal
  })
  return { retrievedMediaQueryData, crystalKey }
}



export const mergeCrystalDataAndMediaQueryData = ({ mediaQueryData, crystalKey, sourceOfTruthCrystalData, prevCrystalMod }: {
  mediaQueryData, crystalKey, sourceOfTruthCrystalData, prevCrystalMod?
}) => {
  let copyCrystalData: crystalParallaxT = cloneDeep(sourceOfTruthCrystalData)
  let mod = false
  let mediaQueryDataImageProps = {}

  if (mediaQueryData.crystalProps)
    mediaQueryDataImageProps = mediaQueryData.crystalProps.imageProps

  copyCrystalData.crystals = copyCrystalData.crystals.map(crystal => {
    if (crystal.key === crystalKey) {
      mod = true
      if (prevCrystalMod) {
        console.log(prevCrystalMod.current)
        prevCrystalMod.current = crystal.mediaQueryWidth
      }
      return {
        ...crystal, ...mediaQueryData,
        crystalProps: {
          ...crystal.crystalProps, ...mediaQueryData.crystalProps,
          imageProps: {
            ...crystal.crystalProps.imageProps, ...[mediaQueryDataImageProps]
          }
        },
        positionInParallaxCanvas: {
          ...crystal.positionInParallaxCanvas, ...mediaQueryData.positionInParallaxCanvas
        }
      }
    } else return crystal
  })

  if (prevCrystalMod) {
    if (prevCrystalMod.current !== mediaQueryData.mediaQueryWidth && mod)
      return copyCrystalData
    else return null
  } else
    return copyCrystalData
}



export const compileMediaQueryDataToCrystalData = ({ rawCrystalData, sourceOfTruthCrystalData, windowWidth, prevCrystalMod, removeMediaQueryWidth }: {
  rawCrystalData, sourceOfTruthCrystalData, windowWidth, prevCrystalMod?, removeMediaQueryWidth?
}) => {
  let { retrievedMediaQueryData, crystalKey } = pullDataFromMediaQueryRelativeToWindowWidth({ rawCrystalData, windowWidth })

  if (!retrievedMediaQueryData) return

  let merged = mergeCrystalDataAndMediaQueryData({
    mediaQueryData: retrievedMediaQueryData, crystalKey, sourceOfTruthCrystalData, prevCrystalMod
  })

  return merged
}



export default pullDataFromMediaQueryRelativeToWindowWidth
