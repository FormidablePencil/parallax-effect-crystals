
import Crystals from './exports/Crystals';
import CrystalParallaxProvider from './CrystalParallaxProvider'
import useGetRawCrystalData from './hooks/useGetRawCrystalData';
import { crystalParallaxT } from './constants/crystalDataTypes';
import CrystalParallax from './CrystalParallax';

export const CrystalGallery = Crystals

// module.exports = {
//   CrystalGallery: Crystals
// }

export {
  CrystalParallax,
  CrystalParallaxProvider, useGetRawCrystalData,
  crystalParallaxT
}