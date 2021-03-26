import React, { useEffect, useState } from 'react'
import {
  CrystalParallaxProvider,
  CrystalParallax,
  crystalParallaxDefault
} from 'parallax-effect-crystals'
import 'parallax-effect-crystals/dist/index.css'
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom'

const App = () => {
  const [fetchCrystalData, setFetchedCrystalData] = useState(null)

  const fetchContent = async () => {
    const res = await fetch(
      'https://cinema-portfolio.wl.r.appspot.com/getcontentdataexmp'
    )
    res.json().then((data) => {
      console.log(data)
      setFetchedCrystalData(data.data.rawCrystalData)
    })
  }

  useEffect(() => {
    fetchContent()
  }, [])

  return (
    <BrowserRouter>
      <Link to='/'>parallax canvas</Link>
      <Link to='/example'>fetched data</Link>
      <Switch>
        <Route exact path='/'>
          <CrystalParallaxProvider
            eventToFollow='scroll'
          >
            <Page crystalData={crystalParallaxDefault} />
          </CrystalParallaxProvider>
        </Route>
        <Route path='/example'>
          <CrystalParallaxProvider
            eventToFollow='scroll'
          >
            <Page crystalData={fetchCrystalData} />
          </CrystalParallaxProvider>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App

const Page = ({ crystalData }: { crystalData: any }) => {
  const onChangeHandler = () => console.log('CrystalParallax changed')

  if (!crystalData) return null
  else
    return (
      <CrystalParallax
        onChange={onChangeHandler}
        withGui={true}
        pulledRawCrystalData={crystalData}
      />
    )
}
