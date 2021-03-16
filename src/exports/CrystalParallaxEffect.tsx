import { makeStyles } from '@material-ui/core'
import React, { createContext, useContext, useEffect, useRef } from 'react'
import {
  CrystalParallaxContext,
  RawCrystalDataContext,
  SettingCrystalDataContext
} from '../CrystalParallaxProvider'
import RenderCrystalsDynamically from '../components/RenderCrystalsDynamically'
import usePrevious from '../hooks/usePrevious'
import useMoveAnim from '../hooks/useMoveAnim'
import { crystalParallaxT } from '../constants/crystalDataTypes'
import { useParallaxPropertiesT } from '../hooks/useParallaxProperties'

export const CrystalDataContext = createContext<any>({ crystalData: {} })

export interface CrystalParallaxEffectT {
  pulledRawCrystalData: crystalParallaxT
  children
  eventToFollow: 'scroll' | 'mouse'
  onChange?: (rawCrystalData: crystalParallaxT) => void
}

function CrystalParallaxEffect({
  onChange,
  pulledRawCrystalData,
  children,
  eventToFollow = 'scroll'
}: CrystalParallaxEffectT) {
  const classes = useStyles()
  const {
    crystalData,
    crystalIndex,
    setCrystalIndex,
    crystalSelectionDistinction,
    selectedForModeColors
  }: useParallaxPropertiesT = useContext<any>(CrystalParallaxContext)

  const { onMouseMoveHandler, onScrollHandler, onScrollAnim } = useMoveAnim({
    eventToFollow
  })
  const { setRawCrystalData, setCrystalData } = useContext<any>(
    SettingCrystalDataContext
  )
  const { rawCrystalData } = useContext<any>(RawCrystalDataContext)
  const renderCount = useRef(0)
  const prevRawCrystalData = usePrevious(rawCrystalData)

  useEffect(() => {
    setRawCrystalData(pulledRawCrystalData)
    setCrystalData(pulledRawCrystalData)
  }, [pulledRawCrystalData])

  /* trigger onChange event when window causes rawCrystalData to change */
  useEffect(() => {
    if (onChange)
      if (rawCrystalData !== prevRawCrystalData) {
        if (renderCount.current > 1) {
          onChange(rawCrystalData)
        } else renderCount.current++
      }
  }, [rawCrystalData])

  return (
    <CrystalDataContext.Provider value={{ crystalData }}>
      <div>
        <div
          onMouseMove={onMouseMoveHandler}
          onScroll={onScrollHandler}
          style={
            crystalData.crystalParallaxBg.backgroundImage
              ? {
                  backgroundColor:
                    crystalData.crystalParallaxBg.backgroundColor,
                  backgroundImage: `url(${crystalData.crystalParallaxBg.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: `${crystalData.crystalParallaxBg.bgImgX}% ${crystalData.crystalParallaxBg.bgImgY}%`
                }
              : { background: crystalData.crystalParallaxBg.backgroundColor }
          }
          className={classes.container}
        >
          <div className={classes.parallaxContainer}>
            <div />
            <RenderCrystalsDynamically
              onScrollAnim={onScrollAnim}
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
    width: '100%'
  },
  parallaxContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'scroll',
    perspective: '8px',
    perspectiveOrigin: '0%'
  }
}))

export default CrystalParallaxEffect
