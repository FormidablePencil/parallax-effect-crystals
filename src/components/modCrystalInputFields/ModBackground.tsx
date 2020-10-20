import { Accordion, AccordionActions, AccordionSummary, Grid, TextField, Typography } from '@material-ui/core'
import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function ModBackground({ dispatchCrystalData, crystalData }) {
  return (

    <Accordion style={{ marginBottom: 6 }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}>
        <Typography variant='h5'>Background</Typography>
      </AccordionSummary>
      <AccordionActions>
        <Grid container spacing={3}>
          <Grid item>
            <TextField
              onChange={(e) => dispatchCrystalData({ type: 'backgroundColor', payload: { newValue: e.target.value } })}
              value={crystalData.crystalParallaxBg.backgroundColor}
              label='background color' />
          </Grid>
          <Grid item>
            <TextField
              onChange={(e) => dispatchCrystalData({ type: 'backgroundImage', payload: { newValue: e.target.value } })}
              value={crystalData.crystalParallaxBg.backgroundImage}
              label='background image' />
          </Grid>
          <Grid item>
            <TextField
              onChange={(e) => dispatchCrystalData({ type: 'bgImgX', payload: { newValue: e.target.value } })}
              value={crystalData.crystalParallaxBg.bgImgX}
              label='background position x' />
          </Grid>
          <Grid item>
            <TextField
              onChange={(e) => dispatchCrystalData({ type: 'bgImgY', payload: { newValue: e.target.value } })}
              value={crystalData.crystalParallaxBg.bgImgY}
              label='background position y' />
          </Grid>
        </Grid>
      </AccordionActions>
    </Accordion>
  )
}

export default ModBackground
