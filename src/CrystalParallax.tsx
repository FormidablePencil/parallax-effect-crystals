import React, { useContext } from 'react'
import CrystalParallaxEffect from './exports/CrystalParallaxEffect'
import { useParallaxPropertiesT } from './hooks/useParallaxProperties';
import { crystalParallaxT } from '.';
import { CrystalParallaxContext } from './CrystalParallaxProvider';
import ParallaxGui from './components/ParallaxGui';

interface CrystalParallaxCompT {
  pulledRawCrystalData: crystalParallaxT
  withGui
}
const CrystalParallax = (props: CrystalParallaxCompT) => {
  const { withGui } = props

  const {
    dispatchCrystalData, crystalData,
    crystalIndex, setCrystalIndex,
    crystalSelectionDistinction, setCrystalSelectionDistinction,
    selectedForModeColors, setSelectedForModeColors,
    modMenuFixed, setModMenuFixed,
    addSpecificCrystal,
    deleteCrystal,
  }: useParallaxPropertiesT = useContext<any>(CrystalParallaxContext)

  return (
    <CrystalParallaxEffect {...props}>
      {withGui &&
        <ParallaxGui
          deleteCrystal={deleteCrystal}
          addSpecificCrystal={addSpecificCrystal}
          modMenuFixed={modMenuFixed} setModMenuFixed={setModMenuFixed}
          selectedForModeColors={selectedForModeColors} setSelectedForModeColors={setSelectedForModeColors}
          crystalSelectionDistinction={crystalSelectionDistinction} setCrystalSelectionDistinction={setCrystalSelectionDistinction}
          crystalIndex={crystalIndex} setCrystalIndex={setCrystalIndex}
          crystalData={crystalData} dispatchCrystalData={dispatchCrystalData}
        />
      }
    </CrystalParallaxEffect>

  )
}
export default CrystalParallax
