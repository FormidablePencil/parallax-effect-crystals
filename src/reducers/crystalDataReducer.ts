import { crystalParallaxT } from '../constants/crystalDataTypes'

const crystalDataReducer = ({
  type,
  payload,
  crystalIndex,
  newState
}: crystalDataReducerT) => {
  const newValue = payload && payload.newValue

  switch (type) {
    case 'translateX3d':
    case 'translateY3d':
    case 'feColorMatrixDx':
    case 'feColorMatrixDy':
    case 'feColorMatrixStdDeviation':
    case 'edgesColor':
    case 'middleColor':
    case 'feColorMatrixBackdropColor':
      newState.crystals[crystalIndex].crystalProps[type] = newValue
      break
    case 'image':
    case 'imageHeight':
    case 'imageWidth':
    case 'imageX':
    case 'imageY':
      let whatProp
      if (type === 'image') whatProp = 'image'
      if (type === 'imageHeight') whatProp = 'height'
      if (type === 'imageWidth') whatProp = 'width'
      if (type === 'imageX') whatProp = 'x'
      if (type === 'imageY') whatProp = 'y'
      newState.crystals[crystalIndex].crystalProps.imageProps[
        whatProp
      ] = newValue
      break
    case 'scale':
    case 'translateZ':
      newState.crystals[crystalIndex].positionInParallaxCanvas.transform[
        type
      ] = newValue
      break
    case 'rotate':
    case 'rotateY':
      newState.crystals[crystalIndex].positionInParallaxCanvas.transform[
        type
      ] = newValue
      break
    case 'zIndex':
    case 'shardIndex':
      newState.crystals[crystalIndex][type] = newValue
      break
    case 'top':
    case 'bottom':
    case 'left':
    case 'right':
      newState.crystals[crystalIndex].positionInParallaxCanvas.xYPosition[
        type
      ] = newValue
      break
    default:
      break
  }
  return newState
}

export default crystalDataReducer

export interface crystalDataReducerT {
  type
  payload
  crystalIndex: number
  newState: crystalParallaxT
  crystalData?
}
