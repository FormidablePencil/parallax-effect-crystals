import React from 'react'
import CrystalBackdrop from './CrystalBackdrop'

function Crystal8({
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
    <svg viewBox="0 0 332 348">
      <defs>
        <CrystalBackdrop
          feColorMatrixDx={feColorMatrixDx}
          feColorMatrixDy={feColorMatrixDy}
          feColorMatrixStdDeviation={feColorMatrixStdDeviation}
          nameId='filter-crystal8' feColorMatrixBackdropColor={feColorMatrixBackdropColor} />
        <mask id="mask-crystal8" x="96" y="76" width="160" height="178" maskUnits="userSpaceOnUse">
          <g className="cls-9">
            <g transform="translate(36.06 -1.62)">
              <image width="160" height="178" transform="translate(59.94 77.62)"
                xlinkHref="data:image/png;base64,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" />
            </g>
          </g>
        </mask>
      </defs>
      <title>Crystal 8</title>
      <g className="cls-1">
        <g id="Shard_13" data-name="Shard 13">
          <polygon fill={edgesColor} filter={browserNotSupported ? '' : "url(#filter-crystal8)"}
            points="253.53 251.01 210.65 153.33 98.86 78.56 153.65 176.05 253.53 251.01" />
          <g onClick={onClickHandler} className="cls-5-crystal8">
            <g className="cls-6">
              <polygon fill={middleColor} points="253.53 251.01 210.65 153.33 98.86 78.56 153.65 176.05 253.53 251.01" />
              <image
                y={imageProps.y} x={imageProps.x}
                height={imageProps.height} width={imageProps.width}
                xlinkHref={imageProps.image}
              />
            </g>
          </g>
        </g>
        <g id="Sheens">
          <polygon className="cls-8" points="206.56 155.52 196.54 158.98 203.1 159.93 206.56 155.52" />
          <polygon className="cls-8" points="158.98 174.6 161.84 169.35 173.29 169.83 158.98 174.6" />
          <polygon className="cls-8" points="185.88 152.44 110.8 89.21 160.25 155.99 185.88 152.44" />
          <polygon className="cls-8" points="239.78 233.5 211.99 182.3 185.88 178.86 239.78 233.5" />
        </g>
      </g>
    </svg >
  )
}

export default Crystal8
