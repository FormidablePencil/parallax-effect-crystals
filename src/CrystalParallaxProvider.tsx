import React, { createContext } from 'react'
import useParallaxProperties, { useParallaxPropertiesT } from './hooks/useParallaxProperties'

export const CrystalParallaxContext = createContext({})
export const RawCrystalDataContext = createContext({})
export const SettingRawCrystalContext = createContext({})

function CrystalParallaxProvider({ children }) {
  const {
    crystalData,
    crystalIndex, setCrystalIndex,
    crystalSelectionDistinction,
    selectedForModeColors,
    windowWidth,
    rawCrystalData,
    setRawCrystalData,
  }: useParallaxPropertiesT = useParallaxProperties()

  return (
    <CrystalParallaxContext.Provider value={{
      crystalData,
      crystalIndex, setCrystalIndex,
      crystalSelectionDistinction,
      selectedForModeColors,
      windowWidth,
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