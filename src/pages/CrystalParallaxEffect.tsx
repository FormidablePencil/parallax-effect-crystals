import { makeStyles } from '@material-ui/core';
import React, { createContext } from 'react'
import ParallaxGui from '../components/ParallaxGui';
import useParallaxProperties, { useParallaxPropertiesT } from '../hooks/useParallaxProperties';
import RenderCrystalsDynamically from '../components/RenderCrystalsDynamically';

export const WindowWidthContext = createContext({ windowWidth: 0 })
export const CrystalDataContext = createContext<any>({ crystalData: {} })

function CrystalParallaxEffect() {
  const classes = useStyles();

  const {
    dispatchCrystalData, crystalData,
    crystalIndex, setCrystalIndex,
    crystalSelectionDistinction, setCrystalSelectionDistinction,
    selectedForModeColors, setSelectedForModeColors,
    modMenuFixed, setModMenuFixed,
    addSpecificCrystal,
    deleteCrystal,
    windowWidth,
  }: useParallaxPropertiesT = useParallaxProperties()


  return (
    <WindowWidthContext.Provider value={{ windowWidth }}>
      <CrystalDataContext.Provider value={{ crystalData }}>
        <div>
          <div style={{
            background: crystalData.crystalParallaxBg.backgroundColor,
            backgroundImage: `url(${crystalData.crystalParallaxBg.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: `${crystalData.crystalParallaxBg.bgImgX}% ${crystalData.crystalParallaxBg.bgImgY}%`,
          }} className={classes.container}>
            <div className={classes.parallaxContainer}>
              <div />
              <RenderCrystalsDynamically
                selectedForModeColors={selectedForModeColors}
                crystalIndex={crystalIndex}
                crystalSelectionDistinction={crystalSelectionDistinction}
                crystalData={crystalData}
                setCrystalIndex={setCrystalIndex} />
            </div>

          </div>
          <ParallaxGui
            deleteCrystal={deleteCrystal}
            addSpecificCrystal={addSpecificCrystal}
            modMenuFixed={modMenuFixed} setModMenuFixed={setModMenuFixed}
            selectedForModeColors={selectedForModeColors} setSelectedForModeColors={setSelectedForModeColors}
            crystalSelectionDistinction={crystalSelectionDistinction} setCrystalSelectionDistinction={setCrystalSelectionDistinction}
            crystalIndex={crystalIndex} setCrystalIndex={setCrystalIndex}
            crystalData={crystalData} dispatchCrystalData={dispatchCrystalData}
          />
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