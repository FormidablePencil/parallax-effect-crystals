import { Container, Grid, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import SelectCrystal from '../components/crystals/SelectCrystal'
import defaultCrystalData from '../constants/crystalDataTypes'
import { mapOverTotalOfCrystals } from '../helpers/mapOverTotalOfCrystals'

export const SvgSizingWrapper = ({ children, overrideStyles }: { children, overrideStyles?: any }) => {
  return (
    <svg style={{ ...{ width: 300 }, ...overrideStyles, }} viewBox="0 0 700 300">
      {children}
    </svg>
  )
}

function Crystals() {
  const [arrToMapOver, setArrToMapOver] = useState([])

  useEffect(() => {
    const createdArr = mapOverTotalOfCrystals()
    setArrToMapOver(createdArr)
  }, [])

  return (
    <Container>
      <Grid container direction='row'>
        {arrToMapOver.map((props, index) =>
          <div>
            <Typography style={{ marginTop: 10 }} variant='body1'>Crystal {index + 1}</Typography>
            <SvgSizingWrapper key={index}>
              <SelectCrystal whatCrystal={index} crystalProps={defaultCrystalData.crystalProps} />
            </SvgSizingWrapper>
          </div>
        )}
      </Grid>
    </Container>
  )
}

export default Crystals
