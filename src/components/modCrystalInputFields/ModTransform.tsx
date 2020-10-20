import { Accordion, AccordionDetails, AccordionSummary, Button, Grid, TextField, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react'

function ModTransform({ dispatchCrystalData, expandedAccordions, toggleAccodion, selectedCrystalProps }) {
  return (
    <Grid item>
      <Accordion
        expanded={expandedAccordions.size}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          onClick={() => toggleAccodion('size')}>
          <Typography variant='h5'>Transform</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            onChange={(e) => dispatchCrystalData({ type: 'scale', payload: { newValue: e.target.value } })}
            value={selectedCrystalProps.positionInParallaxCanvas.transform.scale}
            label='scale' />
          <TextField
            onChange={(e) => dispatchCrystalData({ type: 'translateZ', payload: { newValue: e.target.value } })}
            value={selectedCrystalProps.positionInParallaxCanvas.transform.translateZ}
            label='depth (translateZ)' />
          <TextField
            onChange={(e) => dispatchCrystalData({ type: 'rotate', payload: { newValue: e.target.value } })}
            value={selectedCrystalProps.positionInParallaxCanvas.transform.rotate}
            label='rotate' />
          <Button
            onClick={() => dispatchCrystalData({
              type: 'rotateY', payload: { newValue: !selectedCrystalProps.positionInParallaxCanvas.transform.rotateY }
            })}
            color={selectedCrystalProps.positionInParallaxCanvas.transform.rotateY ? 'secondary' : 'primary'}
          >flip</Button>
        </AccordionDetails>
      </Accordion>
    </Grid>

  )
}

export default ModTransform
