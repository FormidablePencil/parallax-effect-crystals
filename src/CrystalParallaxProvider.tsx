import React, { createContext } from 'react'
import useParallaxProperties, { useParallaxPropertiesT } from './hooks/useParallaxProperties'

export const CrystalParallaxContext = createContext({})
export const RawCrystalDataContext = createContext({})
export const SettingRawCrystalContext = createContext({})

function CrystalParallaxProvider({ children }) {
  const {
    rawCrystalData,
    setRawCrystalData,
    dispatchCrystalData, crystalData,
    crystalIndex, setCrystalIndex,
    crystalSelectionDistinction, setCrystalSelectionDistinction,
    selectedForModeColors, setSelectedForModeColors,
    modMenuFixed, setModMenuFixed,
    addSpecificCrystal,
    deleteCrystal,
  }: useParallaxPropertiesT = useParallaxProperties()

  return (
    <CrystalParallaxContext.Provider value={{
      dispatchCrystalData, crystalData,
      crystalIndex, setCrystalIndex,
      crystalSelectionDistinction, setCrystalSelectionDistinction,
      selectedForModeColors, setSelectedForModeColors,
      modMenuFixed, setModMenuFixed,
      addSpecificCrystal,
      deleteCrystal,
    }}>
      <RawCrystalDataContext.Provider value={{ rawCrystalData }}>
        <SettingRawCrystalContext.Provider value={{ setRawCrystalData }}>
          {children}
        </SettingRawCrystalContext.Provider>
      </RawCrystalDataContext.Provider>
    </CrystalParallaxContext.Provider>
  )
}

export default CrystalParallaxProvider