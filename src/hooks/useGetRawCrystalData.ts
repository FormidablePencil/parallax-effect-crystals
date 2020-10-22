import { useContext } from "react"
import { RawCrystalDataContext } from '../CrystalParallaxProvider'

const useGetRawCrystalData = () => useContext(RawCrystalDataContext)
export default useGetRawCrystalData
