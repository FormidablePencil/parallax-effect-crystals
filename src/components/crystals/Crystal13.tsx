import React from 'react'
import CrystalBackdrop from './CrystalBackdrop'
import styles from '../../styles/crystalStyles.module.css'
function Crystal13({
  onClickHandler,
  imageProps,
  edgesColor,
  middleColor,
  feColorMatrixBackdropColor,
  feColorMatrixStdDeviation,
  feColorMatrixDx,
  feColorMatrixDy,
  browserNotSupported
}: {
  onClickHandler?: any
  imageProps
  edgesColor
  middleColor
  feColorMatrixBackdropColor
  feColorMatrixStdDeviation
  feColorMatrixDx
  feColorMatrixDy
  browserNotSupported?
}) {
  return (
    <svg viewBox='0 0 440 300'>
      <defs>
        <CrystalBackdrop
          feColorMatrixDx={feColorMatrixDx}
          feColorMatrixDy={feColorMatrixDy}
          feColorMatrixStdDeviation={feColorMatrixStdDeviation}
          feColorMatrixBackdropColor={feColorMatrixBackdropColor}
          nameId='filter-crystal13'
        />
        <mask
          id='mask-crystal13'
          x='96'
          y='76'
          width='314'
          height='187'
          maskUnits='userSpaceOnUse'
        >
          <g className={styles.cls9}>
            <g transform='translate(72 17.47)'>
              <image
                width='314'
                height='187'
                transform='translate(24 58.53)'
                xlinkHref='data:image/png;base64,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'
              />
            </g>
          </g>
        </mask>
      </defs>
      <title>crystal 13</title>
      <g className={styles.cls1}>
        <g id='Shard_4' data-name='Shard 4'>
          <polygon
            fill={edgesColor}
            filter={browserNotSupported ? '' : 'url(#filter-crystal13)'}
            points='407.63 139.72 330.92 78.16 98.44 237.89 340.74 260.46 407.63 139.72'
          />
          <g onClick={onClickHandler} className={styles.cls5crystal13}>
            <g className={styles.cls6}>
              <polygon
                fill={middleColor}
                points='407.63 139.72 330.92 78.16 98.44 237.89 340.74 260.46 407.63 139.72'
              />
              <image
                transform={`rotate(${imageProps.rotate})`}
                y={imageProps.y}
                x={imageProps.x}
                height={imageProps.height}
                width={imageProps.width}
                xlinkHref={imageProps.image}
              />
            </g>
          </g>
        </g>
        <g id='Sheens'>
          <polygon
            className={styles.cls8}
            points='327.02 92.8 318 156.83 140 224.57 351.52 172.55 327.02 92.8'
          />
          <polygon
            className={styles.cls8}
            points='335.57 202.25 335.57 251.24 353.05 191.62 335.57 202.25'
          />
          <polygon
            className={styles.cls8}
            points='403.7 140.69 393.37 144.47 369.91 194.22 403.7 140.69'
          />
        </g>
      </g>
    </svg>
  )
}

export default Crystal13
