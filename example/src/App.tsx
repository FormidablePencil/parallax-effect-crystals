import React from 'react'
import { CrystalParallaxProvider, CrystalParallax } from 'parallax-effect'
import 'parallax-effect/dist/index.css'
import crystalParallaxDefault from './constants/crystalParallaxDefault'

const App = () => {

  return (
    <CrystalParallaxProvider>
      <Page />
    </CrystalParallaxProvider>
  )
}

export default App

const Page = () => {
  return (
    <CrystalParallax
      withGui={false}
      pulledRawCrystalData={crystalParallaxDefault} />
  )
}