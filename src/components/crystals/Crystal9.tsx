import React from 'react'
import CrystalBackdrop from './CrystalBackdrop'
import styles from '../../styles/crystalStyles.module.css'
function Crystal9({
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
    <svg viewBox='0 0 324 381'>
      <defs>
        <CrystalBackdrop
          feColorMatrixDx={feColorMatrixDx}
          feColorMatrixDy={feColorMatrixDy}
          feColorMatrixStdDeviation={feColorMatrixStdDeviation}
          nameId='filter-crystal9'
          feColorMatrixBackdropColor={feColorMatrixBackdropColor}
        />
        <mask
          id='mask-crystal9'
          x='97'
          y='76'
          width='151'
          height='210'
          maskUnits='userSpaceOnUse'
        >
          <g className={styles.cls9}>
            <g transform='translate(6.02 32.68)'>
              <image
                width='151'
                height='210'
                transform='translate(90.98 43.32)'
                xlinkHref='data:image/png;base64,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'
              />
            </g>
          </g>
        </mask>
      </defs>
      <title>Crystal 9</title>
      <g className={styles.cls1}>
        <g id='Shard_12' data-name='Shard 12'>
          <polygon
            fill={edgesColor}
            filter={browserNotSupported ? '' : 'url(#filter-crystal9)'}
            points='245.76 201.65 162.56 78.87 99.88 239.96 120.04 274.23 153.03 283.76 202.51 264.7 245.76 201.65'
          />
          <g onClick={onClickHandler} className={styles.cls5crystal9}>
            <g className={styles.cls6}>
              <polygon
                fill={middleColor}
                points='245.76 201.65 162.56 78.87 99.88 239.96 120.04 274.23 153.03 283.76 202.51 264.7 245.76 201.65'
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
            points='169.4 100.89 235.57 199.24 221.62 227.43 226.07 202.8 169.4 100.89'
          />
          <polygon
            className={styles.cls8}
            points='107.08 238.61 147.92 227.59 126.75 238.61 107.08 238.61'
          />
          <polygon
            className={styles.cls8}
            points='152.79 278.04 148.75 264.96 154.87 235 156.84 264.27 152.79 278.04'
          />
          <polygon
            className={styles.cls8}
            points='200.3 261.22 174.66 238.02 197.97 247 200.3 261.22'
          />
          <polygon
            className={styles.cls8}
            points='158.04 227.43 214.47 230.11 169.4 232.96 158.04 227.43'
          />
          <polygon
            className={styles.cls8}
            points='152.79 217.71 148.75 168.96 159.22 119.39 152.79 217.71'
          />
        </g>
      </g>
    </svg>
  )
}

export default Crystal9
