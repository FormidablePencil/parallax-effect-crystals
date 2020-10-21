import React from 'react'
import CrystalBackdrop from './CrystalBackdrop'; 
import styles from '../../styles/crystalStyles.module.css';
function Crystal6({
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
    <svg viewBox="0 0 587 333">
      <defs>
        <mask id="mask-crystal6" x="97" y="76" width="414" height="162" maskUnits="userSpaceOnUse">
          <CrystalBackdrop
        feColorMatrixDx={feColorMatrixDx}
        feColorMatrixDy={feColorMatrixDy}
        feColorMatrixStdDeviation={feColorMatrixStdDeviation}
         nameId="filter-crystal6" feColorMatrixBackdropColor={feColorMatrixBackdropColor} />
          <g className={styles.cls9}>
            <g transform="translate(-10.65 8.7)">
              <image width="414" height="162" transform="translate(107.65 67.3)"
                xlinkHref="data:image/png;base64,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" />
            </g>
          </g>
        </mask>
      </defs>
      <title>Crystal 6</title>
      <g className={styles.cls1}>
        <g id="Shard_14" data-name="Shard 14">
          <polygon fill={edgesColor} filter={browserNotSupported ? '' : "url(#filter-crystal6)"}
            points="508.92 235.26 362.61 129.15 191.99 78.41 99.07 165.07 157.72 216.02 508.92 235.26" />
          <g onClick={onClickHandler} className={styles.cls5crystal6}>
            <g className={styles.cls6}>
              <polygon fill={middleColor}
                points="508.92 235.26 362.61 129.15 191.99 78.41 99.07 165.07 157.72 216.02 508.92 235.26" />
              <image
                y={imageProps.y} x={imageProps.x}
                height={imageProps.height} width={imageProps.width}
                xlinkHref={imageProps.image}
              />
            </g>
          </g>
        </g>
        <g id="Sheens">
          <polygon className={styles.cls8} points="197.5 90.95 358.23 139.5 487.99 227.85 197.5 90.95" />
          <polygon className={styles.cls8}
            points="257.31 215.92 164.17 207.36 107.06 165.07 167.9 195.43 185.26 175.55 179.23 198.32 257.31 215.92" />
        </g>
      </g>
    </svg>
  )
}

export default Crystal6
