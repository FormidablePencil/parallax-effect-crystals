import React from 'react'
import CrystalBackdrop from './CrystalBackdrop'; 
import styles from '../../styles/crystalStyles.module.css';
function Crystal11({
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
    <svg viewBox="0 0 414 317">
      <defs>
        <CrystalBackdrop
        feColorMatrixDx={feColorMatrixDx}
        feColorMatrixDy={feColorMatrixDy}
        feColorMatrixStdDeviation={feColorMatrixStdDeviation}
         feColorMatrixBackdropColor={feColorMatrixBackdropColor}
          nameId='filter-crystal11' />
        <mask id="mask-crystal11" x="97" y="76" width="241" height="146" maskUnits="userSpaceOnUse">
          <g className="cls-10">
            <g transform="translate(9.03 24.91)">
              <image width="241" height="146" transform="translate(87.97 51.09)"
                xlinkHref="data:image/png;base64,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" />
            </g>
          </g>
        </mask>
      </defs>
      <title>Crystal 11</title>
      <g className={styles.cls1}>
        <g id="Shard_6" data-name="Shard 6">
          <polygon fill={edgesColor} filter={browserNotSupported ? '' : "url(#filter-crystal11)"}
            points="335.43 123.31 299.45 78.95 99.16 192.75 122.71 219.32 319.98 165.81 335.43 123.31" />
          <g onClick={onClickHandler} className={styles.cls5crystal11}>
            <g className={styles.cls6}>
              <polygon fill={middleColor}
                points="335.43 123.31 299.45 78.95 99.16 192.75 122.71 219.32 319.98 165.81 335.43 123.31" />
              <image
                y={imageProps.y} x={imageProps.x}
                height={imageProps.height} width={imageProps.width}
                xlinkHref={imageProps.image}
              />
            </g>
          </g>
        </g>
        <g id="Sheens">
          <polygon className={styles.cls8} points="296.81 91.65 292.29 114.66 314.79 140.83 295.71 114.21 296.81 91.65" />
          <polygon className={styles.cls8} points="331.51 123.68 320.98 137.25 329.73 130.85 331.51 123.68" />
          <polygon className={styles.cls8} points="299.95 83.06 327.24 118.52 301.18 91.22 299.95 83.06" />
          <g id="Layer_21" data-name="Layer 21">
            <polygon className={styles.cls8} points="316.44 144.19 318.76 164.26 320.98 157.64 316.44 144.19" />
            <polygon className={styles.cls8} points="286.98 117.53 109.86 191.76 154.56 180.76 286.98 117.53" />
            <polygon className={styles.cls8} points="126.28 212.63 280.07 165.7 313.6 163.53 126.28 212.63" />
          </g>
        </g>
      </g>
    </svg>
  )
}

export default Crystal11
