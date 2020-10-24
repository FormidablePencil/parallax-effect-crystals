export interface SelectCrystalT {
  feColorMatrixDx,
  feColorMatrixDy, feColorMatrixStdDeviation,
  edgesColor, middleColor, feColorMatrixBackdropColor
  imageProps: {
    image: string
    x: number
    y: number
    height: number
    width: number
  }
}

export interface mediaQueriesSelectCrystalT {
  feColorMatrixDx?,
  feColorMatrixDy?, feColorMatrixStdDeviation?,
  edgesColor?, middleColor?, feColorMatrixBackdropColor?,
  imageProps?: {
    image?: string
    x?: number
    y?: number
    height?: number
    width?: number
  }
}

export interface mediaQueriesDataAppentionT {
  mediaQueryWidth?: number
  shardIndex?: number
  zIndex?: number
  crystalProps?: mediaQueriesSelectCrystalT
  positionInParallaxCanvas?: {
    transform?: {
      scale?: string | number
      translateZ?: string | number
      rotateY?: boolean
      rotate?: string
    }
    xYPosition?: {
      top?: string | number
      bottom?: string | number
      left?: string | number
      right?: string | number
    }
  }
}
export interface crystalPositionOnParallaxCanvasT {
  mediaQueryWidth: string | number,
  key?: number,
  shardIndex: number
  zIndex: number
  crystalProps: SelectCrystalT
  positionInParallaxCanvas: {
    transform: {
      scale: string | number
      translateZ: string | number
      rotateY: boolean
      rotate: string
    }
    xYPosition: {
      top: string | number
      bottom: string | number
      left: string | number
      right: string | number
    }
  }
  mediaQueries?: mediaQueriesDataAppentionT[]
}

export interface crystalParallaxT {
  crystalParallaxBg: {
    backgroundColor: string
    backgroundImage: string
    bgImgX: string | number
    bgImgY: string | number
  }
  crystals: crystalPositionOnParallaxCanvasT[]
}

export const feColorMatrixCrystalBackdropColor = `
0     0     0     0     0 
0     0     0     0     0 
0     0     0     0     0 
0     0     0    .2     0
`

export const totalCrystals = 13

const defaultCrystalData: crystalPositionOnParallaxCanvasT = {
  mediaQueryWidth: '',
  key: 9,
  shardIndex: 0,
  zIndex: 0,
  crystalProps: {
    imageProps: {
      image: 'https://i.ibb.co/r0Br5g6/react-spring.png',
      x: 200,
      y: 10,
      height: 225,
      width: 225,
    },
    feColorMatrixDx: 2,
    feColorMatrixDy: 4,
    feColorMatrixStdDeviation: 1,
    edgesColor: '#5C8AE4', middleColor: '#F62E34',
    feColorMatrixBackdropColor: feColorMatrixCrystalBackdropColor,
  },
  positionInParallaxCanvas: {
    transform: {
      scale: 2,
      translateZ: 1,
      rotateY: false,
      rotate: '',
    },/* 'translateZ(1px) scale(1)' */
    xYPosition: {
      top: '100px',
      bottom: '',
      left: '100px',
      right: '',
    }
  },
  mediaQueries: []
}

/*//!  maybe remove  */
export const crystalDataPlaceholder: crystalPositionOnParallaxCanvasT = {
  mediaQueryWidth: '',
  key: 0,
  shardIndex: 0,
  zIndex: 0,
  crystalProps: {
    imageProps: {
      image: '',
      x: 0,
      y: 0,
      height: 0,
      width: 0,
    },
    feColorMatrixDx: 0,
    feColorMatrixDy: 0,
    feColorMatrixStdDeviation: 0,
    edgesColor: '', middleColor: '',
    feColorMatrixBackdropColor: feColorMatrixCrystalBackdropColor,
  },
  positionInParallaxCanvas: {
    transform: {
      scale: 0,
      translateZ: 0,
      rotateY: false,
      rotate: '',
    },/* 'translateZ(1px) scale(1)' */
    xYPosition: {
      top: '',
      bottom: '',
      left: '',
      right: '',
    }
  },
  mediaQueries: []
}

export const parallaxDefaults: crystalParallaxT = {
  crystalParallaxBg: {
    backgroundColor: '#373737',
    backgroundImage: 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v475-katie-101-abstractblackandwhitebg_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=86196a47d14e811c3149f69279f90c1e',
    bgImgX: '',
    bgImgY: '',
  },
  crystals: []
}


export default defaultCrystalData