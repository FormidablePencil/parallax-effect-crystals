import React from 'react'
import CrystalBackdrop from './CrystalBackdrop'
import styles from '../../styles/crystalStyles.module.css'
function Crystal4({
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
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 383 317'
    >
      <defs>
        <CrystalBackdrop
          feColorMatrixDx={feColorMatrixDx}
          feColorMatrixDy={feColorMatrixDy}
          feColorMatrixStdDeviation={feColorMatrixStdDeviation}
          nameId='filter-crystal4'
          feColorMatrixBackdropColor={feColorMatrixBackdropColor}
        />
        <mask
          id='mask-crystal4'
          x='96'
          y='76'
          width='211'
          height='145'
          maskUnits='userSpaceOnUse'
        >
          <g className={styles.cls9}>
            <g transform='translate(45.75 -7.33)'>
              <image
                width='211'
                height='145'
                transform='translate(50.25 83.33)'
                xlinkHref='data:image/png;base64,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'
              />
            </g>
          </g>
        </mask>
      </defs>
      <title>Crystal 4</title>
      <g className={styles.cls1}>
        <g id='Shard_8' data-name='Shard 8'>
          <polygon
            fill={edgesColor}
            filter={browserNotSupported ? '' : 'url(#filter-crystal4)'}
            points='304.53 90.62 272.73 78.89 140 145.38 98.21 213.86 98.21 217.73 202.87 218.85 259.38 198.27 304.53 90.62'
          />
          <g onClick={onClickHandler} className={styles.cls5crystal4}>
            <g className={styles.cls6}>
              <polygon
                fill={middleColor}
                points='304.53 90.62 272.73 78.89 140 145.38 98.21 213.86 98.21 217.73 202.87 218.85 259.38 198.27 304.53 90.62'
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
            points='150.53 148.87 272.63 81.59 205.88 115.11 150.53 148.87'
          />
          <polygon
            className={styles.cls8}
            points='147.6 156.5 110.14 211.12 140.22 183.81 147.6 156.5'
          />
          <polygon
            className={styles.cls8}
            points='280.02 130.65 253.93 185.95 200.04 210.51 257.62 192.76 280.02 130.65'
          />
          <polygon
            className={styles.cls8}
            points='246.6 178.69 217.87 159.28 230.05 172.07 246.6 178.69'
          />
          <polygon
            className={styles.cls8}
            points='207.49 156.5 167.78 157.93 190.49 161.24 207.49 156.5'
          />
          <polygon
            className={styles.cls8}
            points='218.59 151.18 287.01 97.95 258.54 132.97 218.59 151.18'
          />
        </g>
      </g>
    </svg>
  )
}

export default Crystal4
