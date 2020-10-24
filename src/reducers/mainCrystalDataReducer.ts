import { crystalParallaxT } from "../constants/crystalDataTypes";
import { dispatchCrystalDataT } from "../hooks/useParallaxProperties";
import cloneDeep from 'lodash/cloneDeep';
import crystalDataMediaQueryReducer from "./crystalDataMediaQueryReducer";
import crystalDataReducer from "./crystalDataReducer";
import addNewMediaQueryToCrystalData from "../functions/addNewMediaQueryToCrystalData";
import compile_crystalData_appropriate_to_media_query from "../functions/compile_crystalData_appropriate_to_media_query";
import updateMediaQueryValues from "../functions/updateMediaQueryValues";


const mainCrystalDataReducer = (
  { type, payload }: dispatchCrystalDataT,
  { rawCrystalData, crystalData,
    setCrystalData, setRawCrystalData,
    crystalIndex, updateRawAndSourceOfTruthCrystalData, windowWidth }
) => {
  let newStateRaw: crystalParallaxT = cloneDeep(rawCrystalData);

  switch (type) {
    case 'backgroundColor':
    case 'backgroundImage':
    case 'bgImgX':
    case 'bgImgY':
      newStateRaw.crystalParallaxBg[type] = payload.newValue
      updateRawAndSourceOfTruthCrystalData(newStateRaw)
      break;

    case 'update mediaQuery values':
      newStateRaw = updateMediaQueryValues(payload, newStateRaw, crystalIndex)
      setRawCrystalData(newStateRaw)

      const newCompiledCrystalData = compile_crystalData_appropriate_to_media_query({ rawCrystalData: newStateRaw, windowWidth })
      setCrystalData(newCompiledCrystalData)
      // updateRawAndSourceOfTruthCrystalData(newStateRaw)
      break;

    case 'addMediaQuery':
      const stateWithNewMediaQuery = addNewMediaQueryToCrystalData({ newStateRaw, crystalIndex, rawCrystalData })
      updateRawAndSourceOfTruthCrystalData(stateWithNewMediaQuery)
      break;

    case 'removeMediaQuery':
      newStateRaw.crystals[crystalIndex].mediaQueries = newStateRaw.crystals[crystalIndex].mediaQueries.filter(item =>
        item.mediaQueryWidth !== payload.mediaQueryWidth)
      updateRawAndSourceOfTruthCrystalData(newStateRaw)
      break;

    default:
      if (crystalData.crystals[crystalIndex].mediaQueryWidth) { /* if mediaQuery is present */
        newStateRaw = crystalDataMediaQueryReducer({
          type,
          payload: {
            newValue: payload.newValue,
          },
          crystalData: crystalData,
          crystalIndex, newState: newStateRaw
        })
        setRawCrystalData(newStateRaw)
        
        const newCompiledCrystalData = compile_crystalData_appropriate_to_media_query({ rawCrystalData: newStateRaw, windowWidth })
        
        setCrystalData(newCompiledCrystalData)
        
      } else {/* if no mediaQuery present */
        newStateRaw = crystalDataReducer({ type, payload, crystalIndex, newState: newStateRaw })
        
        const newCompiledCrystalData = compile_crystalData_appropriate_to_media_query({ rawCrystalData: newStateRaw, windowWidth })
        
        setRawCrystalData(newStateRaw)
        setCrystalData(newCompiledCrystalData)
      }
      break;
  }
}


export default mainCrystalDataReducer