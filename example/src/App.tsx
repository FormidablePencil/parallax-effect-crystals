import React from 'react'
import { CrystalParallaxProvider, CrystalParallax } from 'parallax-effect-crystals'
import 'parallax-effect-crystals/dist/index.css'
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
  const onChangeHandler = () => {
    console.log('hit');
  }

  return (
    <CrystalParallax
      onChange={onChangeHandler}
      withGui={true}
      pulledRawCrystalData={crystalParallaxDefault} />
  )
}