import { useEffect } from "react"
import { compile_crystalData_appropriate_to_media_query } from "../functions/compile_crystalData_appropriate_to_media_query"

const useCompileCrystalData = ({ rawCrystalData, crystalData, setCrystalData, windowWidth }) => {
  useEffect(() => {

    // if there's are no crystals to compile then do nothing
    if (!rawCrystalData
      || rawCrystalData.crystals.length === 0)
      return

    const newCompiledCrystalData = compile_crystalData_appropriate_to_media_query({ rawCrystalData, windowWidth })

    if (newCompiledCrystalData)
      setCrystalData(newCompiledCrystalData)
  }, [windowWidth])
}

export default useCompileCrystalData