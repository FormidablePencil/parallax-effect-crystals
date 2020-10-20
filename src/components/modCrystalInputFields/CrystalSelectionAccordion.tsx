import { Accordion, AccordionDetails, AccordionSummary, Button, Grid, makeStyles } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react'
import { mapOverTotalOfCrystals } from '../../helpers/mapOverTotalOfCrystals';
import SelectCrystal from '../crystals/SelectCrystal';

function CrystalSelectionAccordion({ onClickCrystalHandler, accordionSummary }) {
  const classes = useStyles();

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}>
        {accordionSummary}
      </AccordionSummary>
      <AccordionDetails>
        <Grid container direction='row' className={classes.crystalSelectionContainer}>
          {mapOverTotalOfCrystals().map((item, index) =>
            <Grid item key={index}>
              <Button
                onClick={() => onClickCrystalHandler(index)}
                className={classes.crystalBtn}
                key={index}>Crystal {index + 1}
                <div style={{ height: 105, width: 75 }}>
                  <SelectCrystal whatCrystal={index} />
                </div>
              </Button>
            </Grid>
          )}
        </Grid>
      </AccordionDetails>
    </Accordion>

  )
}


const useStyles = makeStyles((theme) => ({
  crystalSelectionContainer: {
    height: 200,
    overflowY: 'scroll'
  },
  crystalBtn: {
    width: '100%'
  },
}));

export default CrystalSelectionAccordion
