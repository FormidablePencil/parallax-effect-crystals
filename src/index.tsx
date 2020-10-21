import * as React from 'react'
import CrystalParallaxEffect from './pages/CrystalParallaxEffect'
import styles from './styles.module.css'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const CrystalParallaxEffectGui = CrystalParallaxEffect
