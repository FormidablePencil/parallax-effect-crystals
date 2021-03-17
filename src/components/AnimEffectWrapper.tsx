import React, { useContext } from 'react'
import { animated } from 'react-spring'
import { makeStyles } from '@material-ui/core'
import { CrystalParallaxContext } from '../CrystalParallaxProvider'

const AnimEffectWrapper = ({
  children,
  onScrollAnim,
  translateX3d,
  translateY3d,
  crystalUuid
}) => {
  const styles = useStyles()
  const trans4 = (x, y) =>
    `translate3d(${x / translateX3d}px,${y / translateY3d}px,0)`
  const { crystalClickedOn }: any = useContext(CrystalParallaxContext)

  return (
    <animated.div
      style={{
        transform: onScrollAnim.xy.interpolate(trans4)
      }}
    >
      <div
        onClick={() => crystalClickedOn && crystalClickedOn(crystalUuid)}
        className={crystalClickedOn && styles.container}
      >
        {children}
      </div>
    </animated.div>
  )
}

const useStyles = makeStyles(() => ({
  container: {
    maxHeight: '10em',
    maxWidth: '10em',
    // backgroundColor: 'orange',
    transition: 'transform 500ms',
    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(1.2) translateX(-20px)',
      transition: 'transform 500ms'
    }
  }
}))

// transform: 'scale(1.2)'

export default AnimEffectWrapper
