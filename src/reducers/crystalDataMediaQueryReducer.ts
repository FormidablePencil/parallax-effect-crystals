import { crystalDataReducerT } from "./crystalDataReducer";

const crystalDataMediaQueryReducer = ({ type, payload, crystalIndex, crystalData, newState }: crystalDataReducerT) => {
  const newValue = payload && payload.newValue

  newState.crystals[crystalIndex].mediaQueries.map(data => {
    if (data.mediaQueryWidth === crystalData.crystals[crystalIndex].mediaQueryWidth) {
      switch (type) {
        case 'feColorMatrixDx':
        case 'feColorMatrixDy':
        case 'feColorMatrixStdDeviation':
        case 'edgesColor':
        case 'middleColor':
        case 'feColorMatrixBackdropColor':
          data.crystalProps[type] = newValue /* //! */
          break;

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
          data.crystalProps.imageProps[whatProp] = newValue
          break;

        case 'scale':
        case 'translateZ':
          data.positionInParallaxCanvas.transform[type] = newValue
          break;

        case 'rotate':
        case 'rotateY':
          data.positionInParallaxCanvas.transform[type] = newValue
          data.positionInParallaxCanvas.transform[type] = newValue
          break;

        case 'zIndex':
        case 'shardIndex':
          data[type] = newValue
          break;

        case 'top':
        case 'bottom':
        case 'left':
        case 'right':
          data.positionInParallaxCanvas.xYPosition[type] = newValue
          break;

        default:
          break;
      }
    }
    return data
  })
  return newState
}

export default crystalDataMediaQueryReducer