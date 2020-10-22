import { Accordion, AccordionDetails, AccordionSummary, Grid, makeStyles, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, { useContext } from 'react'
import { crystalPositionOnParallaxCanvasT } from '../../constants/crystalDataTypes';
import { WindowWidthContext } from '../../exports/CrystalParallaxEffect';
import RenderMediaQuerySliders from './RenderMediaQuerySliders';

function ModMediaQueries({ dispatchCrystalData, selectedCrystalProps, expandedAccordions, toggleAccodion }:
  { dispatchCrystalData, selectedCrystalProps: crystalPositionOnParallaxCanvasT, expandedAccordions, toggleAccodion }) {

  return (
    <Grid item>
      <Accordion
        expanded={expandedAccordions.mediaQuery}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          onClick={() => toggleAccodion('mediaQuery')}>
          <Grid container alignItems='baseline'>
            <Typography variant='h5'>Media Queries</Typography>
            <CurrentScreenWidth />
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>

            <RenderMediaQuerySliders
              dispatchCrystalData={dispatchCrystalData}
              selectedCrystalProps={selectedCrystalProps} />

          </Grid>
        </AccordionDetails>
      </Accordion>
    </Grid>
  )
}

const CurrentScreenWidth = () => {
  const { windowWidth } = useContext(WindowWidthContext)
  const classes = useStyles();
  return (
    <Typography className={classes.windowWidth}>screen width: {windowWidth}</Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  windowWidth: {
    marginLeft: '1em'
  }
}));

export default ModMediaQueries
