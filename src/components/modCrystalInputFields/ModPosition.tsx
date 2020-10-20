import { Accordion, AccordionDetails, AccordionSummary, Grid, TextField, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react'
import { crystalPositionOnParallaxCanvasT } from '../../constants/crystalParallax';

function ModPosition({ dispatchCrystalData, expandedAccordions, toggleAccodion, selectedCrystalProps
}: { dispatchCrystalData, expandedAccordions, toggleAccodion, selectedCrystalProps: crystalPositionOnParallaxCanvasT }) {
  return (
    <Grid item container>
      <Accordion
        expanded={expandedAccordions.position}
        style={{ width: '100%' }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          onClick={() => toggleAccodion('position')}>
          <Grid item container alignItems='baseline'>
            <Typography variant='h5'>Position</Typography>
            <Typography variant='body1' style={{ color: '#D0D0D0', marginLeft: 5, fontSize: 14 }}>append px or em at the end for top, bottom, left and right</Typography>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          {selectedCrystalProps.positionInParallaxCanvas.xYPosition &&
            <React.Fragment>
              <TextField
                onChange={(e) => dispatchCrystalData({ type: 'top', payload: { newValue: e.target.value } })}
                value={selectedCrystalProps.positionInParallaxCanvas.xYPosition.top}
                label='top' />
              <TextField
                onChange={(e) => dispatchCrystalData({ type: 'bottom', payload: { newValue: e.target.value } })}
                value={selectedCrystalProps.positionInParallaxCanvas.xYPosition.bottom}
                label='bottom' />
              <TextField
                onChange={(e) => dispatchCrystalData({ type: 'left', payload: { newValue: e.target.value } })}
                value={selectedCrystalProps.positionInParallaxCanvas.xYPosition.left}
                label='left' />
              <TextField
                onChange={(e) => dispatchCrystalData({ type: 'right', payload: { newValue: e.target.value } })}
                value={selectedCrystalProps.positionInParallaxCanvas.xYPosition.right}
                label='right' />
              <TextField
                onChange={(e) => dispatchCrystalData({ type: 'zIndex', payload: { newValue: e.target.value } })}
                value={selectedCrystalProps.zIndex}
                label='zIndex' />
            </React.Fragment>
          }
        </AccordionDetails>
      </Accordion>
    </Grid>
  )
}

export default ModPosition
