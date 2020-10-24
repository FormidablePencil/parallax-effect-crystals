import { useState } from 'react'
import defaultCrystalData, { crystalParallaxT, parallaxDefaults, } from '../constants/crystalDataTypes'
import cloneDeep from 'lodash/cloneDeep';
import useCompileCrystalData from './useCompileCrystalData';
import useWindowSize from "./useWindowSize"
import mainCrystalDataReducer from '../reducers/mainCrystalDataReducer';
import { sliderValuesT } from '../components/modCrystalInputFields/RenderMediaQuerySliders';
import { v4 as uuidv4 } from 'uuid'

export interface selectedForModeColorsT { middle, edge }
export interface dispatchCrystalDataT { type, payload?: { newValue?, moddedMediaQueryValues?: sliderValuesT[], mediaQueryWidth?} }

const useParallaxProperties = (): useParallaxPropertiesT => {
  const [crystalIndex, setCrystalIndex] = useState(0)
  const [crystalSelectionDistinction, setCrystalSelectionDistinction] = useState(true)
  const [selectedForModeColors, setSelectedForModeColors] = useState<selectedForModeColorsT>({ middle: '#000000', edge: '#FFFFFF' })
  const [modMenuFixed, setModMenuFixed] = useState(true)
  const [rawCrystalData, setRawCrystalData] = useState<crystalParallaxT>(parallaxDefaults)
  const [crystalData, setCrystalData] = useState<crystalParallaxT>(parallaxDefaults)

  // const prevCrystalMod = useRef('') // so to not update state if everything is the same
  const windowWidth = useWindowSize().width

  /* compile only when screen width === mediaQuery that's stored in rawCrystalData */
  useCompileCrystalData({ rawCrystalData, crystalData, setCrystalData, windowWidth })


  const updateRawAndSourceOfTruthCrystalData = (state: crystalParallaxT) => {
    setRawCrystalData(state)
    setCrystalData(state)
  }


  const addSpecificCrystal = (index) => {
    let newState = cloneDeep(crystalData)
    const newComponent = cloneDeep(defaultCrystalData)
    newComponent.key = uuidv4()
    newComponent.shardIndex = index
    // console.log(newComponent, 'newComponent')
    newState.crystals.push(newComponent)
    console.log(newState, 'newState')
    updateRawAndSourceOfTruthCrystalData(newState)
    setCrystalIndex(newState.crystals.length - 1)
  }



  const deleteCrystal = () => {
    if (crystalData.crystals.length === 1) return
    let newState = cloneDeep(crystalData)
    newState.crystals.splice(crystalIndex, 1)
    updateRawAndSourceOfTruthCrystalData(newState)
    setCrystalIndex(prev => prev - 1)
  }



  const dispatchCrystalData = ({ type, payload }: dispatchCrystalDataT) => {
    mainCrystalDataReducer(
      { type, payload },
      {
        rawCrystalData, setRawCrystalData, crystalData, setCrystalData,
        crystalIndex, updateRawAndSourceOfTruthCrystalData
      }
    )
  }



  return {
    dispatchCrystalData, crystalData,
    crystalIndex, setCrystalIndex,
    crystalSelectionDistinction, setCrystalSelectionDistinction,
    selectedForModeColors, setSelectedForModeColors,
    modMenuFixed, setModMenuFixed,
    addSpecificCrystal,
    deleteCrystal,
    windowWidth,
    rawCrystalData,
    setRawCrystalData,
    setCrystalData,
  }
}

export default useParallaxProperties

export interface useParallaxPropertiesT {
  dispatchCrystalData,
  crystalData: crystalParallaxT,
  setRawCrystalData,
  crystalIndex, setCrystalIndex,
  crystalSelectionDistinction, setCrystalSelectionDistinction,
  selectedForModeColors, setSelectedForModeColors,
  modMenuFixed, setModMenuFixed,
  addSpecificCrystal,
  deleteCrystal,
  windowWidth,
  rawCrystalData,
  setCrystalData,
}