import { totalCrystals } from "../constants/crystalDataTypes"

export const mapOverTotalOfCrystals: any = () => {
  let arrToMapOver = []
  for (let i = 0; i < totalCrystals; i++) {
    arrToMapOver.push(1)
  }
  return arrToMapOver
}