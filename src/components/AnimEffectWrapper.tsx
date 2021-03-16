import React from 'react'
import { animated } from 'react-spring'

const AnimEffectWrapper = ({
  children,
  onScrollAnim,
  translateX3d,
  translateY3d
}) => {
  const trans4 = (x, y) =>
    `translate3d(${x / translateX3d}px,${y / translateY3d}px,0)`
  console.log(translateX3d)

  return (
    <animated.div
      style={{
        backgroundColor: 'orange',
        transform: onScrollAnim.xy.interpolate(trans4)
      }}
    >
      <div>{children}</div>
    </animated.div>
  )
}

// transform: 'scale(1.2)'

export default AnimEffectWrapper
