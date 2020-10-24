import createUniqueMediaQuery from "../helpers/createUniqueMediaQuery";
import { feColorMatrixCrystalBackdropColor } from '../constants/crystalDataTypes';


const mediaQueryPlaceholder = {
  shardIndex: 0,
  zIndex: 0,
  crystalProps: {
    imageProps: {
      x: 50,
      y: 10,
      height: 225,
      width: 225,
    },
    feColorMatrixDx: 2,
    feColorMatrixBackdropColor: feColorMatrixCrystalBackdropColor,
    edgesColor: '#CB8B65', middleColor: '#F44083',
  },
  positionInParallaxCanvas: {
    transform: {
      scale: 2,
      translateZ: 1,
      rotateY: false,
      rotate: '',
    },
    xYPosition: {
      top: '100px',
      bottom: '',
      left: '100px',
      right: '',
    },
  }
}

const addNewMediaQueryToCrystalData = ({ newStateRaw, crystalIndex, rawCrystalData }) => {
  newStateRaw.crystals[crystalIndex].mediaQueries.push({
    ...mediaQueryPlaceholder,
    mediaQueryWidth: createUniqueMediaQuery({ crystalData: rawCrystalData, crystalIndex })/* must be different than any other mediaQueryWidth */
  })
  return newStateRaw
}

export default addNewMediaQueryToCrystalData
