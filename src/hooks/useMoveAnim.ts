import { useSpring } from 'react-spring'

const useMoveAnim = ({ eventToFollow }) => {
  const [onScrollAnim, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 }
  }))

  const onScrollHandler = (e) => {
    console.log(e, 'well?')
    if (eventToFollow === 'scroll')
      set({ xy: [e.target.scrollTop, e.target.scrollTop] })
  }

  const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]

  const onMouseMoveHandler = ({ clientX: x, clientY: y }) => {
    if (eventToFollow === 'mouse') set({ xy: calc(x, y) })
  }

  return { onScrollAnim, onMouseMoveHandler, onScrollHandler }
}

export default useMoveAnim
