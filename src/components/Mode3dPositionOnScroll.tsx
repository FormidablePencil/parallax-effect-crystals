import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  makeStyles,
  TextField,
  Typography
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import React, { useContext } from 'react'
import { CrystalParallaxContext } from '../CrystalParallaxProvider'

function Mode3dPositionOnScroll({
  dispatchCrystalData,
  selectedCrystalProps,
  expandedAccordions,
  toggleAccodion
}) {
  const classes = useStyles()
  const { eventToFollow }: any = useContext(CrystalParallaxContext)

  return (
    <Grid item>
      <Accordion expanded={expandedAccordions.onScollMovementAnim}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          onClick={() => toggleAccodion('onScollMovementAnim')}
        >
          <Grid container alignItems='baseline'>
            <Typography variant='h5'>
              {eventToFollow === 'scroll' ? 'on scroll' : 'on mouse'} movement
            </Typography>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            <TextField
              className={classes.imageTextField}
              onChange={(e) =>
                dispatchCrystalData({
                  type: 'translateX3d',
                  payload: { newValue: e.target.value }
                })
              }
              value={selectedCrystalProps.crystalProps.translateX3d}
              label='translateX3d'
            />
            <TextField
              className={classes.imageTextField}
              onChange={(e) =>
                dispatchCrystalData({
                  type: 'translateY3d',
                  payload: { newValue: e.target.value }
                })
              }
              value={selectedCrystalProps.crystalProps.translateY3d}
              label='translateY3d'
            />
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Grid>
  )
}

const useStyles = makeStyles(() => ({
  imageTextField: {
    width: 250
  }
}))

export default Mode3dPositionOnScroll
