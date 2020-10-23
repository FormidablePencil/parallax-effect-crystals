import { useEffect, useRef } from "react"
import { compileMediaQueryDataToCrystalData } from "../functions/pullDataFromMediaQueryRelativeToWindowWidth"

const useCompileCrystalData = ({ prevCrystalMod, rawCrystalData, crystalData, setCrystalData, windowWidth }) => {

  const renderCount = useRef(0)

  useEffect(() => {
    if (renderCount.current > 0) {
      const compiledCrystalData = compileMediaQueryDataToCrystalData({
        rawCrystalData, sourceOfTruthCrystalData: crystalData,
        windowWidth: window.innerWidth, prevCrystalMod
      })
      if (compiledCrystalData)
        setCrystalData(compiledCrystalData)
    } else renderCount.current++
  }, [windowWidth])
}

export default useCompileCrystalData