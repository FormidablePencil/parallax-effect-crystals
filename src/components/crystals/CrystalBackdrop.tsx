import React from 'react'

function CrystalBackdrop({
  nameId,
  feColorMatrixBackdropColor,
  feColorMatrixDx,
  feColorMatrixDy,
  feColorMatrixStdDeviation,
}) {
  return (
    <filter id={nameId} x="0" y="0" width="200%" height="200%">
      <feOffset result="offOut" in="SourceGraphic" dx={feColorMatrixDx} dy={feColorMatrixDy} />
      <feColorMatrix result="matrixOut" in="offOut" type="matrix"
        values={feColorMatrixBackdropColor} />
      <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation={feColorMatrixStdDeviation} />
      <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
    </filter>
  )
}

export default CrystalBackdrop
