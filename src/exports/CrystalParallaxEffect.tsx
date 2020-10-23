import { makeStyles } from '@material-ui/core';
import React, { createContext, useContext, useEffect } from 'react'
import { useParallaxPropertiesT } from '../hooks/useParallaxProperties';
import { CrystalParallaxContext, SettingCrystalDataContext } from '../CrystalParallaxProvider'
import { crystalParallaxT } from '../constants/crystalDataTypes';
import RenderCrystalsDynamically from '../components/RenderCrystalsDynamically';

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
    crystalIndex,
    setCrystalIndex,
    crystalSelectionDistinction,
    selectedForModeColors,
  }: useParallaxPropertiesT = useContext<any>(CrystalParallaxContext)
  const { setRawCrystalData, setCrystalData } = useContext<any>(SettingCrystalDataContext)
  // const { rawCrystalData } = useContext<any>(RawCrystalDataContext)

  // const renderCount = useRef(0)
  // const prevRawCrystalData = usePrevious(rawCrystalData)

  /* trigger onChange event of rawCrystalData !== prevRawCrystalData */
  // useEffect(() => {
  //   if (onChange)
  //     if (rawCrystalData !== prevRawCrystalData)
  //       if (renderCount.current > 1) {
  //         onChange(rawCrystalData)
  //       } else renderCount.current++
  // }, [rawCrystalData])


  useEffect(() => {
    setRawCrystalData(pulledRawCrystalData)
    setCrystalData(pulledRawCrystalData)
  }, [pulledRawCrystalData])

  return (
    <CrystalDataContext.Provider value={{ crystalData }}>
      <div>
        <div style={
          crystalData.crystalParallaxBg.backgroundImage ?
            {
              background: crystalData.crystalParallaxBg.backgroundColor,
              backgroundImage: `url(${crystalData.crystalParallaxBg.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: `${crystalData.crystalParallaxBg.bgImgX}% ${crystalData.crystalParallaxBg.bgImgY}%`,
            } : { background: crystalData.crystalParallaxBg.backgroundColor, }} className={classes.container}>
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