import React from 'react'
import CrystalBackdrop from './CrystalBackdrop'; 
import styles from '../../styles/crystalStyles.module.css';
function Crystal10({
  onClickHandler,
  imageProps, edgesColor, middleColor,
  feColorMatrixBackdropColor, feColorMatrixStdDeviation, feColorMatrixDx, feColorMatrixDy, browserNotSupported
}: {
  onClickHandler?: any
  imageProps, edgesColor, middleColor,
  feColorMatrixBackdropColor, feColorMatrixStdDeviation,
  feColorMatrixDx, feColorMatrixDy, browserNotSupported?
}) {
  return (
    <svg viewBox="0 0 278 300">
      <defs>
        <CrystalBackdrop
          feColorMatrixDx={feColorMatrixDx}
          feColorMatrixDy={feColorMatrixDy}
          feColorMatrixStdDeviation={feColorMatrixStdDeviation}
          nameId="filter-crystal10" feColorMatrixBackdropColor={feColorMatrixBackdropColor} />
        <mask id="mask-crystal10" x="97" y="76" width="105" height="128" maskUnits="userSpaceOnUse">
          <g className={styles.cls9}>
            <g transform="translate(-0.52 5.91)">
              <image width="105" height="128" transform="translate(97.52 70.09)"
                xlinkHref="data:image/png;base64,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" />
            </g>
          </g>
        </mask>
      </defs>
      <title>Crystal 10</title>
      <g className={styles.cls1}>
        <g id="Shard_11" data-name="Shard 11">
          <polygon fill={edgesColor} filter={browserNotSupported ? '' : "url(#filter-crystal10)"}
            points="161.38 182.05 199.87 78.19 190.68 80.1 99.48 151.01 117.86 201.81 161.38 182.05" />
          <g onClick={onClickHandler} className={styles.cls5crystal10}>
            <g className={styles.cls6}>
              <polygon fill={middleColor}
                points="161.38 182.05 199.87 78.19 190.68 80.1 99.48 151.01 117.86 201.81 161.38 182.05" />
              <image
                x='0' y='10'
                height={imageProps.height} width={imageProps.width}
                xlinkHref={imageProps.image}
              />
            </g>
          </g>
        </g>
        <g id="Sheens">
          <polygon className={styles.cls8} points="192.15 85.23 143.98 165.33 136.79 165.33 155.2 175.53 192.15 85.23" />
          <polygon className={styles.cls8} points="177.39 93.67 108.41 150.85 123 155.47 177.39 93.67" />
          <polygon className={styles.cls8} points="119.62 194.31 122.81 161.5 105.99 154.44 119.62 194.31" />
          <polygon className={styles.cls8} points="126.74 189.95 128.04 168.45 154.15 181.89 126.74 189.95" />
        </g>
      </g>
    </svg>
  )
}

export default Crystal10
