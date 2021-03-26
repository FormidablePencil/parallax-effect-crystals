import { makeStyles } from '@material-ui/core'
import cloneDeep from 'lodash/cloneDeep'
import React from 'react'
import { crystalParallaxT } from '../constants/crystalDataTypes'
import { SvgSizingWrapper } from '../exports/Crystals'
import AnimEffectWrapper from './AnimEffectWrapper'
import SelectCrystal from './crystals/SelectCrystal'

function RenderCrystalsToChooseFrom({
  crystalData,
  crystalIndex,
  selectedForModeColors,
  crystalSelectionDistinction,
  setCrystalIndex
}: {
  crystalData: crystalParallaxT
  selectedForModeColors
  crystalSelectionDistinction
  crystalIndex
  setCrystalIndex
}) {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <React.Fragment>
        {/* change crystalParallaxDefault to controlled: crystalData */}
        {crystalData.crystals.map((props, index) => {
          const rotateY = props.positionInParallaxCanvas.transform.rotateY
            ? `rotateY(180deg)`
            : ''
          const rotate =
            props.positionInParallaxCanvas.transform.rotate &&
            `rotate(${props.positionInParallaxCanvas.transform.rotate}deg)`
          let modedPropsSelectedForEdit
          if (crystalIndex === index && crystalSelectionDistinction) {
            modedPropsSelectedForEdit = cloneDeep(props.crystalProps)
            modedPropsSelectedForEdit.edgesColor = selectedForModeColors.edge
            modedPropsSelectedForEdit.middleColor = selectedForModeColors.middle
          }

          return (
            <div
              className={`${classes.crystalContainer} ${
                crystalIndex === index && classes.crystalSelected
              }`}
              key={index}
              onClick={() => setCrystalIndex(index)}
            >
              <div style={{ pointerEvents: 'none' }}>
                <AnimEffectWrapper
                  crystalUuid={props.key}
                  translateX3d={props.crystalProps.translateX3d}
                  translateY3d={props.crystalProps.translateY3d}
                >
                  <SvgSizingWrapper
                    overrideStyles={{ transform: ` ${rotate} ${rotateY}` }}
                  >
                    <SelectCrystal
                      onClickHandler={() => {}}
                      whatCrystal={props.shardIndex}
                      crystalProps={
                        modedPropsSelectedForEdit
                          ? modedPropsSelectedForEdit
                          : props.crystalProps
                      }
                    />
                  </SvgSizingWrapper>
                </AnimEffectWrapper>
              </div>
            </div>
          )
        })}
      </React.Fragment>
    </div>
  )
}

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    position: 'absolute',
    top: 0,
    width: '100vw',
    overflow: 'scroll'
  },
  crystalContainer: {
    margin: '1em',
    backgroundColor: 'rgba(220, 220, 220, .1)'
  },
  crystalSelected: {
    backgroundColor: 'rgba(220, 220, 220, .2)'
  }
}))

export default RenderCrystalsToChooseFrom
