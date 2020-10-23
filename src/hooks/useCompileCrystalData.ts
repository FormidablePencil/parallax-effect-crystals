import { useEffect } from "react"
import { compileMediaQueryDataToCrystalData } from "../functions/pullDataFromMediaQueryRelativeToWindowWidth"

const useCompileCrystalData = ({ prevCrystalMod, rawCrystalData, crystalData, setCrystalData, windowWidth }) => {

  useEffect(() => {
    const compiledCrystalData = compileMediaQueryDataToCrystalData({
      rawCrystalData, sourceOfTruthCrystalData: crystalData,
      windowWidth: window.innerWidth, prevCrystalMod
    })
    console.log(compiledCrystalData)
    if (compiledCrystalData)
      setCrystalData(compiledCrystalData)
  }, [windowWidth])
}

export default useCompileCrystalData