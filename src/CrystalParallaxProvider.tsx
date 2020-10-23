import React, { createContext } from 'react'
import useParallaxProperties, { useParallaxPropertiesT } from './hooks/useParallaxProperties'

export const WindowWidthContext = createContext({ windowWidth: 0 })
export const CrystalParallaxContext = createContext({})
export const RawCrystalDataContext = createContext({})
export const SettingCrystalDataContext = createContext({})

function CrystalParallaxProvider({ children }) {
  const {
    windowWidth,
    rawCrystalData,
    setRawCrystalData,
    setCrystalData,
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
        <SettingCrystalDataContext.Provider value={{ setCrystalData, setRawCrystalData }}>
          <WindowWidthContext.Provider value={{windowWidth}}>
            {children}
          </WindowWidthContext.Provider>
        </SettingCrystalDataContext.Provider>
      </RawCrystalDataContext.Provider>
    </CrystalParallaxContext.Provider>
  )
}

export default CrystalParallaxProvider