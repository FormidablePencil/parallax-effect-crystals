import React from 'react'
import { CrystalParallaxProvider, CrystalParallax } from 'parallax-effect-crystals'
import 'parallax-effect-crystals/dist/index.css'
import crystalParallaxDefault from './constants/crystalParallaxDefault'
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom'

const App = () => {

  return (
    <CrystalParallaxProvider>
      <BrowserRouter>
        <Link to='/'>parallax canvas</Link>
        <Link to='/page2'>page 2</Link>
        <Switch>
          <Route exact path='/'>
            <Page />
          </Route>
          <Route path='/page2'>
            <div>page2</div>
          </Route>
        </Switch>
      </BrowserRouter>
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