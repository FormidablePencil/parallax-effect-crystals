import { Button, Grid, Slider, Typography, withStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { dispatchCrystalDataT } from '../../hooks/useParallaxProperties';

export interface sliderValuesT { initial, mod }

const RenderMediaQuerySliders = ({ dispatchCrystalData, selectedCrystalProps }:
  { dispatchCrystalData: (item: dispatchCrystalDataT) => {}, selectedCrystalProps }) => {

  const [sliderValues, setSliderValues] = useState<sliderValuesT[]>([{ initial: 0, mod: 0 }])
  const [readyToSave, setReadyToSave] = useState(false)

  
  const onChangeSlider = ({ newValue, key }) => {
    setSliderValues(prev => prev.map(prevItem =>
      prevItem.initial === key ? { mod: newValue, initial: prevItem.initial } : prevItem))
  }


  const saveSliderValue = () => {
    const moddedMediaQueryValues = sliderValues.filter(item => item.initial !== item.mod && item.mod)
    dispatchCrystalData({ type: 'update mediaQuery values', payload: { moddedMediaQueryValues } })
    setReadyToSave(false)
  }


  const onClickCreateNewMediaQuery = (e) => {
    dispatchCrystalData({ type: 'addMediaQuery', payload: null })
    setReadyToSave(false) /* save current slider values and create new mediaQuery */
  }


  const onClickDeleteMediaQueryHandler = (mediaQueryWidth) => {
    dispatchCrystalData({ type: 'removeMediaQuery', payload: { mediaQueryWidth } })
  }


  const getSliderValue = ({ mediaQueryWidth }) => {
    return sliderValues.filter(item =>
      item.initial === mediaQueryWidth)[0] ?
      sliderValues.filter(item =>
        item.initial === mediaQueryWidth)[0].mod : null
  }


  useEffect(() => {
    let sre = () => selectedCrystalProps.mediaQueries.map(mediaQuery => {
      return { initial: mediaQuery.mediaQueryWidth, mod: mediaQuery.mediaQueryWidth }
    })
    setSliderValues(sre())
  }, [selectedCrystalProps])


  // if sliderValues changed then show save btn
  useEffect(() => {
    sliderValues.map(value => {
      if (!readyToSave && value.mod !== value.initial)
        setReadyToSave(true)
      return value
    })
  }, [sliderValues])
  
  return (
    <React.Fragment>
      <Typography
        variant='h5'
        color={selectedCrystalProps.mediaQueryWidth === '' ? 'secondary' : 'primary'}>
        Original
        </Typography>

      {selectedCrystalProps.mediaQueries.map((mediaQuery) => {
        let currentMQApplied = false
        if (mediaQuery.mediaQueryWidth === selectedCrystalProps.mediaQueryWidth)
          currentMQApplied = true
        return (
          <Grid key={mediaQuery.mediaQueryWidth} container direction='row' wrap='nowrap'>
            <Grid item container>
              <Slider
                color={currentMQApplied ? 'secondary' : 'primary'}
                valueLabelDisplay='on'
                min={0}
                max={2000}
                value={getSliderValue(mediaQuery)}
                onChange={(e, newValue) => onChangeSlider({
                  newValue, key: sliderValues.filter(item =>
                    item.initial === mediaQuery.mediaQueryWidth)[0].initial
                })
                }
              />
            </Grid>
            <Grid
              item
              onClick={() => onClickDeleteMediaQueryHandler(mediaQuery.mediaQueryWidth)}>
              <Button>X</Button>
            </Grid>

          </Grid>
        )
      })}

      <Button
        style={{ marginRight: 10, background: '#F4D168' }}
        variant='contained'
        onClick={onClickCreateNewMediaQuery}
      >New media query</Button>

      {readyToSave &&
        <SaveButton
          variant='contained'
          onClick={saveSliderValue}>Save</SaveButton>
      }

      {/* sliderValues check if initial !== mod and if so then render the save btn to save data */}
    </React.Fragment>
  )
}

const SaveButton = withStyles({
  root: {
    backgroundColor: '#FFFB48',
  }
})(Button)

export default RenderMediaQuerySliders