import React from 'react'
import cloneDeep from 'lodash/cloneDeep'
import { makeStyles } from '@material-ui/core'
import { SvgSizingWrapper } from '../exports/Crystals'
import SelectCrystal from './crystals/SelectCrystal'
import { crystalParallaxT } from '../constants/crystalDataTypes'
import AnimEffectWrapper from './AnimEffectWrapper'

const RenderCrystalsDynamically = ({
  onScrollAnim,
  setCrystalIndex,
  selectedForModeColors,
  crystalIndex,
  crystalSelectionDistinction,
  crystalData
}: {
  onScrollAnim
  setCrystalIndex
  selectedForModeColors
  crystalIndex
  crystalSelectionDistinction
  crystalData: crystalParallaxT
}) => {
  const classes = useStyles()

  // const [props]: any = useSpring(() => ({
  //   xy: [0, 0],
  //   config: { mass: 10, tension: 550, friction: 140 }
  // }))

  return (
    <React.Fragment>
      {/* change crystalParallaxDefault to controlled: crystalData */}
      {crystalData.crystals.map((props, index) => {
        let rotateY = props.positionInParallaxCanvas.transform.rotateY
          ? `rotateY(180deg)`
          : ''
        let rotate =
          props.positionInParallaxCanvas.transform.rotate &&
          `rotate(${props.positionInParallaxCanvas.transform.rotate}deg)`
        let modedPropsSelectedForEdit
        if (crystalIndex === index && crystalSelectionDistinction) {
          modedPropsSelectedForEdit = cloneDeep(props.crystalProps)
          modedPropsSelectedForEdit.edgesColor = selectedForModeColors.edge
          modedPropsSelectedForEdit.middleColor = selectedForModeColors.middle
        }

        return (
          <AnimEffectWrapper
            translateX3d={props.crystalProps.translateX3d}
            translateY3d={props.crystalProps.translateY3d}
            onScrollAnim={onScrollAnim}
            key={index}
          >
            <div
              className={classes.parallaxItem}
              style={{
                zIndex: props.zIndex,
                transform: `
        translateZ(${props.positionInParallaxCanvas.transform.translateZ}px) 
        scale(${props.positionInParallaxCanvas.transform.scale})
        `,
                ...props.positionInParallaxCanvas.xYPosition
              }}
            >
              <SvgSizingWrapper
                overrideStyles={{ transform: ` ${rotate} ${rotateY}` }}
              >
                <SelectCrystal
                  onClickHandler={() => setCrystalIndex(index)}
                  whatCrystal={props.shardIndex}
                  crystalProps={
                    modedPropsSelectedForEdit
                      ? props.crystalProps
                      : props.crystalProps
                  }
                />
              </SvgSizingWrapper>
            </div>
          </AnimEffectWrapper>
        )
      })}
    </React.Fragment>
  )
}

const useStyles = makeStyles(() => ({
  parallaxItem: {
    position: 'absolute'
  }
}))

export default RenderCrystalsDynamically
