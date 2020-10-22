import React, { useContext } from 'react'
import CrystalParallaxEffect from './exports/CrystalParallaxEffect'
import RenderCrystalsDynamically from './components/RenderCrystalsDynamically';
import { useParallaxPropertiesT } from './hooks/useParallaxProperties';
import { crystalParallaxT } from '.';
import { CrystalParallaxContext } from './CrystalParallaxProvider';

interface CrystalParallaxCompT {
  pulledRawCrystalData: crystalParallaxT
  withGui
}
const CrystalParallax = (props: CrystalParallaxCompT) => {
  const { withGui } = props

  const {
    crystalData,
    crystalIndex, setCrystalIndex,
    crystalSelectionDistinction,
    selectedForModeColors,
  }: useParallaxPropertiesT = useContext<any>(CrystalParallaxContext)

  return (
    <CrystalParallaxEffect {...props}>
      {withGui &&
       
      }
    </CrystalParallaxEffect>

  )
}
export default CrystalParallax
