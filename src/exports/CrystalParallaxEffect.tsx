import { makeStyles } from '@material-ui/core';
import React, { createContext, useContext, useEffect, useRef } from 'react'
import { useParallaxPropertiesT } from '../hooks/useParallaxProperties';
import { CrystalParallaxContext, SettingRawCrystalContext, RawCrystalDataContext } from '../CrystalParallaxProvider'
import { crystalParallaxT } from '../constants/crystalDataTypes';
import RenderCrystalsDynamically from '../components/RenderCrystalsDynamically';
import usePrevious from '../hooks/usePrevious';

export const WindowWidthContext = createContext({ windowWidth: 0 })
export const CrystalDataContext = createContext<any>({ crystalData: {} })

export interface CrystalParallaxEffectT {
  pulledRawCrystalData: crystalParallaxT
  children
  onChange?: (rawCrystalData: crystalParallaxT) => void
}

function CrystalParallaxEffect({ onChange, pulledRawCrystalData, children }: CrystalParallaxEffectT) {
  const classes = useStyles();
  const {
    crystalData,
    windowWidth,

    crystalIndex,
    setCrystalIndex,
    crystalSelectionDistinction,
    selectedForModeColors,
  }: useParallaxPropertiesT = useContext<any>(CrystalParallaxContext)
  const { setRawCrystalData } = useContext<any>(SettingRawCrystalContext)
  const { rawCrystalData } = useContext<any>(RawCrystalDataContext)

  const renderCount = useRef(0)
  const prevRawCrystalData = usePrevious(rawCrystalData)

  /* trigger onChange event of rawCrystalData !== prevRawCrystalData */
  useEffect(() => {
    if (onChange)
      if (rawCrystalData !== prevRawCrystalData)
        if (renderCount.current > 1) {
          onChange(rawCrystalData)
        } else renderCount.current++
  }, [rawCrystalData])


  useEffect(() => {
    setRawCrystalData(pulledRawCrystalData)
  }, [pulledRawCrystalData])

  return (
    <WindowWidthContext.Provider value={{ windowWidth }}>
      <CrystalDataContext.Provider value={{ crystalData }}>
        <div>
          <div style={{
            background: '#fff',
            // backgroundImage: `url(${crystalData.crystalParallaxBg.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: `${crystalData.crystalParallaxBg.bgImgX}% ${crystalData.crystalParallaxBg.bgImgY}%`,
          }} className={classes.container}>
            <div className={classes.parallaxContainer}>
              <div />
              <RenderCrystalsDynamically
                crystalData={crystalData}
                crystalIndex={crystalIndex}
                setCrystalIndex={setCrystalIndex}
                crystalSelectionDistinction={crystalSelectionDistinction}
                selectedForModeColors={selectedForModeColors}
              />
            </div>
            {children}
          </div>
        </div>
      </CrystalDataContext.Provider>
    </WindowWidthContext.Provider>
  )
}

const useStyles = makeStyles(() => ({
  container: {
    height: '100vh',
    width: '100%',
  },
  parallaxContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'scroll',
    perspective: '8px',
    perspectiveOrigin: '0%',
  },
}));

export default CrystalParallaxEffect