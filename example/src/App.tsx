import React from 'react'
import { CrystalParallaxProvider, CrystalParallax, useGetRawCrystalData } from 'parallax-effect'
import 'parallax-effect/dist/index.css'
import crystalParallaxDefault from './constants/crystalParallaxDefault'

const App = () => {

  return (
    <CrystalParallaxProvider>
      <Page />
    </CrystalParallaxProvider>
  )
}
// CrystalParallaxEffectGui

export default App

const Page = () => {
  const res = useGetRawCrystalData()
  console.log(res, 'resres');
  return (
    <CrystalParallax
      withGui={true}
      pulledRawCrystalData={crystalParallaxDefault} />
  )
}