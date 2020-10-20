import { Container, Grid, Typography, withStyles } from '@material-ui/core'
import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { pages } from '../../Routes'

function Navbar() {
  const { path } = useRouteMatch()

  const BackToHome = () =>
    <Grid container direction='row'>
      {pages.map((page, index) => {
        if (path !== page.path) {
          return (
            <TypographyCentered key={page.title}>
              <Link key={page.title} to={page.path}><p>{page.title}</p></Link>
            </TypographyCentered>
          )
        } else return (
          <TypographyCentered key={page.title}>{page.title}</TypographyCentered>
        )
      })}
    </Grid>

  return (
    <div style={{ backgroundColor: '#EDEDED' }}>
      <Container>
        <BackToHome />
      </Container>
    </div>
  )
}


const TypographyCentered = withStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 1em 0 1em',
  }
})(Typography);

export default Navbar
