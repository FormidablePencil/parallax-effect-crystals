import React from 'react'
import CrystalBackdrop from './CrystalBackdrop'
import styles from '../../styles/crystalStyles.module.css'
function Crystal12({
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
    <svg viewBox='0 0 309 278'>
      <defs>
        <CrystalBackdrop
          feColorMatrixDx={feColorMatrixDx}
          feColorMatrixDy={feColorMatrixDy}
          feColorMatrixStdDeviation={feColorMatrixStdDeviation}
          feColorMatrixBackdropColor={feColorMatrixBackdropColor}
          nameId='filter-crystal12'
        />
        <mask
          id='mask-crystal12'
          x='97'
          y='76'
          width='136'
          height='107'
          maskUnits='userSpaceOnUse'
        >
          <g className={styles.cls9}>
            <g transform='translate(29.56 25.06)'>
              <image
                width='136'
                height='107'
                transform='translate(67.44 50.94)'
                xlinkHref='data:image/png;base64,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'
              />
            </g>
          </g>
        </mask>
      </defs>
      <title>Crystal 12</title>
      <g className={styles.cls1}>
        <g id='Shard_5' data-name='Shard 5'>
          <polygon
            fill={edgesColor}
            filter={browserNotSupported ? '' : 'url(#filter-crystal2)'}
            points='230.36 78.44 105.6 78.84 99.62 180.68 230.36 78.44'
          />
          <g onClick={onClickHandler} className={styles.cls5crystal12}>
            <g className={styles.cls6}>
              <polygon
                fill={middleColor}
                points='230.36 78.44 105.6 78.84 99.62 180.68 230.36 78.44'
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
          <polyline
            className={styles.cls8}
            points='112.25 84.92 199.29 84.28 137.9 88.31'
          />
          <polygon
            className={styles.cls8}
            points='103.44 168.84 167.03 118.11 114.58 165.12 103.44 168.84'
          />
        </g>
      </g>
    </svg>
  )
}

export default Crystal12
