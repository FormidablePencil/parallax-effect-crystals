import React from 'react'
import cloneDeep from 'lodash/cloneDeep';
import { makeStyles } from '@material-ui/core';
import { SvgSizingWrapper } from '../pages/Crystals';
import SelectCrystal from './crystals/SelectCrystal';
import { crystalParallaxT } from '../constants/crystalParallax';


const RenderCrystalsDynamically = ({
  setCrystalIndex,
  selectedForModeColors,
  crystalIndex,
  crystalSelectionDistinction,
  crystalData
}: {
  setCrystalIndex,
  selectedForModeColors,
  crystalIndex,
  crystalSelectionDistinction,
  crystalData: crystalParallaxT
}) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      {/* change crystalParallaxDefault to controlled: crystalData */}
      {crystalData.crystals.map((props, index) => {
        let rotateY = props.positionInParallaxCanvas.transform.rotateY
          ? `rotateY(180deg)` : ''
        let rotate = props.positionInParallaxCanvas.transform.rotate
          && `rotate(${props.positionInParallaxCanvas.transform.rotate}deg)`
        let modedPropsSelectedForEdit
        if (crystalIndex === index && crystalSelectionDistinction) {
          modedPropsSelectedForEdit = cloneDeep(props.crystalProps)
          modedPropsSelectedForEdit.edgesColor = selectedForModeColors.edge
          modedPropsSelectedForEdit.middleColor = selectedForModeColors.middle
        }

        return (
          <div key={index} className={classes.parallaxItem} style={{
            zIndex: props.zIndex,
            transform: `
        translateZ(${props.positionInParallaxCanvas.transform.translateZ}px) 
        scale(${props.positionInParallaxCanvas.transform.scale})
        `,
            ...props.positionInParallaxCanvas.xYPosition
          }}>
            <SvgSizingWrapper overrideStyles={{ transform: ` ${rotate} ${rotateY}` }}>
              <SelectCrystal
                onClickHandler={() => setCrystalIndex(index)}
                whatCrystal={props.shardIndex} crystalProps={modedPropsSelectedForEdit ?? props.crystalProps} />
            </SvgSizingWrapper>
          </div>
        )
      }
      )}
    </React.Fragment>
  )
}


const useStyles = makeStyles(() => ({
  parallaxItem: {
    position: "absolute",
  },
}));

export default RenderCrystalsDynamically