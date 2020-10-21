import { Accordion, AccordionDetails, AccordionSummary, Button, Grid, makeStyles, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react'
import CrystalSelectionAccordion from './CrystalSelectionAccordion';
import styles from '../../styles/crystalStyles.module.css';

function ModAddChangeDelete({ deleteCrystal, expandedAccordions,
  toggleAccodion, addSpecificCrystal, dispatchCrystalData }) {
  const classes = useStyles();

  return (
    <Grid item>
      <Accordion
        expanded={expandedAccordions.addAndDelete}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          onClick={() => toggleAccodion('addAndDelete')}>
          <Typography variant='h5'>Add, change & delete</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container direction='column'>

            <Grid container>
              <Grid item className={styles.orangebgtest}>
                <Button
                  onClick={deleteCrystal}
                  className={classes.delete}>Delete component</Button>
              </Grid>

              <CrystalSelectionAccordion
                accordionSummary='Crystal type'
                onClickCrystalHandler={(index) =>
                  dispatchCrystalData({ type: 'shardIndex', payload: { newValue: index } })} />

              <CrystalSelectionAccordion
                accordionSummary='Add Component'
                onClickCrystalHandler={addSpecificCrystal} />



            </Grid>

          </Grid>
        </AccordionDetails>
      </Accordion>
    </Grid>
  )
}


const useStyles = makeStyles((theme) => ({
  delete: {
    color: '#F87070'
  },
  add: {
    color: '#498B31'
  },
}));

export default ModAddChangeDelete
