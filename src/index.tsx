import * as React from 'react'
import styles from './styles.module.css'
import CrystalParallaxEffect from './pages/CrystalParallaxEffect'


interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const CrystalParallaxEffectGui = CrystalParallaxEffect
