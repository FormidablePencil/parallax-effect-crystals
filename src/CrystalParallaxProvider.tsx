import React, { createContext } from 'react'
import useParallaxProperties, {
  useParallaxPropertiesT
} from './hooks/useParallaxProperties'

export const WindowWidthContext = createContext({ windowWidth: 2000 })
export const CrystalParallaxContext = createContext({})
export const RawCrystalDataContext = createContext<any>({})
export const SettingCrystalDataContext = createContext({})

function CrystalParallaxProvider({
  children,
  eventToFollow,
  crystalClickedOn
}: {
  children
  eventToFollow?
  crystalClickedOn?
}) {
  const {
    windowWidth,
    rawCrystalData,
    setRawCrystalData,
    setCrystalData,
    dispatchCrystalData,
    crystalData,
    crystalIndex,
    setCrystalIndex,
    crystalSelectionDistinction,
    setCrystalSelectionDistinction,
    selectedForModeColors,
    setSelectedForModeColors,
    modMenuFixed,
    setModMenuFixed,
    addSpecificCrystal,
    deleteCrystal
  }: useParallaxPropertiesT = useParallaxProperties()

  return (
    <WindowWidthContext.Provider value={{ windowWidth }}>
      <CrystalParallaxContext.Provider
        value={{
          eventToFollow,
          dispatchCrystalData,
          crystalData,
          crystalIndex,
          setCrystalIndex,
          crystalSelectionDistinction,
          setCrystalSelectionDistinction,
          selectedForModeColors,
          setSelectedForModeColors,
          modMenuFixed,
          setModMenuFixed,
          addSpecificCrystal,
          deleteCrystal,
          crystalClickedOn
        }}
      >
        <RawCrystalDataContext.Provider value={{ rawCrystalData }}>
          <SettingCrystalDataContext.Provider
            value={{ setCrystalData, setRawCrystalData }}
          >
            {children}
          </SettingCrystalDataContext.Provider>
        </RawCrystalDataContext.Provider>
      </CrystalParallaxContext.Provider>
    </WindowWidthContext.Provider>
  )
}

export default CrystalParallaxProvider
