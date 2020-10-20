import { Accordion, AccordionDetails, AccordionSummary, Grid, TextField, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react'
import { dispatchCrystalDataT } from '../../hooks/useParallaxProperties';

function ModColor({ dispatchCrystalData, expandedAccordions, toggleAccodion, selectedCrystalProps }: {
  dispatchCrystalData: (item: dispatchCrystalDataT) => {}, expandedAccordions, toggleAccodion, selectedCrystalProps
}) {
  
  return (
    <Grid item>
      <Accordion
        expanded={expandedAccordions.color}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          onClick={() => toggleAccodion('color')}>
          <Typography variant='h5'>Color</Typography>
          <Typography style={{ fontSize: 14, marginLeft: '1em', color: '#D0D0D0' }}>
            site where to convert color into special format for backdropColor you can
            find <a style={{ color: '#AAB7FF' }} href='http://andresgalante.com/RGBAtoFeColorMatrix/'>here</a>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          </Typography>
          <TextField
            onChange={(e) => dispatchCrystalData({ type: 'edgesColor', payload: { newValue: e.target.value } })}
            value={selectedCrystalProps.crystalProps.edgesColor}
            label='edgesColor' />
          <TextField
            onChange={(e) => dispatchCrystalData({ type: 'middleColor', payload: { newValue: e.target.value } })}
            value={selectedCrystalProps.crystalProps.middleColor}
            label='middleColor' />
          <TextField
            onChange={(e) => dispatchCrystalData({ type: 'feColorMatrixBackdropColor', payload: { newValue: e.target.value } })}
            value={selectedCrystalProps.crystalProps.feColorMatrixBackdropColor}
            label='backdropColor' />
        </AccordionDetails>
      </Accordion>
    </Grid>

  )
}

export default ModColor
