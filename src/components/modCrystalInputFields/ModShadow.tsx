import { Accordion, AccordionDetails, AccordionSummary, Grid, TextField, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react'
import { dispatchCrystalDataT } from '../../hooks/useParallaxProperties';

function ModShadow({ dispatchCrystalData, expandedAccordions, toggleAccodion, selectedCrystalProps }: {
  dispatchCrystalData?: (item: dispatchCrystalDataT) => {}, expandedAccordions, toggleAccodion, selectedCrystalProps
}) {
  return (
    <Grid item>
      <Accordion
        expanded={expandedAccordions.shadow}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          onClick={() => toggleAccodion('shadow')}
        >
          <Typography variant='h5'>Shadow</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            onChange={(e) => dispatchCrystalData({ type: 'feColorMatrixDx', payload: { newValue: e.target.value } })}
            value={selectedCrystalProps.crystalProps.feColorMatrixDx} label='dx' />
          <TextField
            onChange={(e) => dispatchCrystalData({ type: 'feColorMatrixDy', payload: { newValue: e.target.value } })}

            value={selectedCrystalProps.crystalProps.feColorMatrixDy} label='dy' />
          <TextField
            onChange={(e) => dispatchCrystalData({ type: 'feColorMatrixStdDeviation', payload: { newValue: e.target.value } })}
            value={selectedCrystalProps.crystalProps.feColorMatrixStdDeviation} label='stdDeviation' />
        </AccordionDetails>
      </Accordion>
    </Grid>
  )
}

export default ModShadow
