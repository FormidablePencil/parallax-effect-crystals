import { useEffect } from "react"
// import { compileMediaQueryDataToCrystalData } from "../functions/pullDataFromMediaQueryRelativeToWindowWidth"
import { compile_crystalData_appropriate_to_media_query } from "../functions/compile_crystalData_appropriate_to_media_query"


const useCompileCrystalData = ({ rawCrystalData, crystalData, setCrystalData, windowWidth }) => {

  useEffect(() => {
    // const compiledCrystalData = compileMediaQueryDataToCrystalData({
    //   rawCrystalData, sourceOfTruthCrystalData: crystalData,
    //   windowWidth: window.innerWidth
    // })
    // console.log(compiledCrystalData)


    // if there's are no crystals to compile then do nothing
    if (!rawCrystalData
      || rawCrystalData.crystals.length === 0)
      return

    const newCompiledCrystalData = compile_crystalData_appropriate_to_media_query({ rawCrystalData, windowWidth })
    console.log(newCompiledCrystalData, 'newCompiledCrystalData')
    // console.log(newCompiledCrystalData, compiledCrystalData, 'compiledCrystalData, newCompiledCrystalData')




    if (newCompiledCrystalData)
      setCrystalData(newCompiledCrystalData)
  }, [windowWidth])
}

export default useCompileCrystalData