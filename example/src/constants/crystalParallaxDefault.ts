import { crystalParallaxT } from 'parallax-effect-crystals'

const feColorMatrixCrystalBackdropColor = `
0     0     0     0     0 
0     0     0     0     0 
0     0     0     0     0 
0     0     0    .2     0
`

/* dummy data */
const crystalParallaxDefault: crystalParallaxT = {
  crystalParallaxBg: {
    backgroundColor: '#373737',
    backgroundImage: 'https://wallpaperboat.com/wp-content/uploads/2020/03/grey-texture-background-image-20.jpg',
    bgImgX: '',
    bgImgY: '',
  },
  crystals: [
    {
      mediaQueryWidth: '',
      key: 7,
      shardIndex: 5,
      zIndex: 1,
      crystalProps: {
        imageProps: {
          image: 'https://i.ibb.co/r0Br5g6/react-spring.png',
          x: 50,
          y: 10,
          height: 225,
          width: 225,
        },
        feColorMatrixDx: 5,
        feColorMatrixDy: 5,
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
          top: '800px',
          bottom: '',
          left: '100px',
          right: '',
        }
      },
      mediaQueries: [ /* append data for mediaQueries that is different than it's main */
        {
          mediaQueryWidth: 555,
          shardIndex: 0,
          zIndex: 0,
          crystalProps: {
            imageProps: {
              x: 50,
              y: 10,
              height: 225,
              width: 225,
            },
            feColorMatrixDx: 2,
            feColorMatrixBackdropColor: feColorMatrixCrystalBackdropColor,
            edgesColor: '#5C8AE4', middleColor: '#F62E34',
          },
          positionInParallaxCanvas: {
            transform: {
              scale: 1,
              translateZ: 3,
              rotateY: false,
              rotate: '',
            },
            xYPosition: {
              top: '100px',
              bottom: '',
              left: '0px',
              right: '',
            },
          }
        },
        {
          mediaQueryWidth: 711,
          shardIndex: 9,
          zIndex: 0,
          crystalProps: {
            imageProps: {
              x: 50,
              y: 10,
              height: 225,
              width: 225,
            },
            feColorMatrixDx: 2,
            feColorMatrixBackdropColor: feColorMatrixCrystalBackdropColor,
            edgesColor: '#5C8AE4', middleColor: '#F62E34',

          },
          positionInParallaxCanvas: {
            transform: {
              scale: 2,
              translateZ: 1
            },/* 'translateZ(1px) scale(1)' */
            xYPosition: {
              top: '100px',
              bottom: '',
              left: '100px',
              right: '',
            },
          }
        },
      ]
    },
    {
      mediaQueryWidth: '',
      key: 8,
      shardIndex: 6,
      zIndex: 0,
      crystalProps: {
        imageProps: {
          image: 'https://i.ibb.co/0pNL1RX/react-Native-Logo.png',
          x: 50,
          y: 10,
          height: 225,
          width: 225,
        },
        feColorMatrixDx: 5,
        feColorMatrixDy: 5,
        feColorMatrixStdDeviation: 1,
        edgesColor: '#5E30CB', middleColor: '#9791CB',
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
          top: '400px',
          bottom: '',
          left: '0px',
          right: '',
        }
      },
      mediaQueries: [ /* append data for mediaQueries that is different than it's main */
        {
          mediaQueryWidth: 555,
          shardIndex: 0,
          zIndex: 0,
          crystalProps: {
            imageProps: {
              x: 50,
              y: 10,
              height: 225,
              width: 225,
            },
            feColorMatrixDx: 2,
            feColorMatrixBackdropColor: feColorMatrixCrystalBackdropColor,
            edgesColor: '#5E30CB', middleColor: '#9791CB',
          },
          positionInParallaxCanvas: {
            transform: {
              scale: 2,
              translateZ: 1,
              rotateY: false,
              rotate: '',
            },
            xYPosition: {
              top: '400px',
              bottom: '',
              left: '0px',
              right: '',
            },
          }
        },
        {
          mediaQueryWidth: 711,
          shardIndex: 9,
          zIndex: 0,
          crystalProps: {
            imageProps: {
              x: 50,
              y: 10,
              height: 225,
              width: 225,
            },
            feColorMatrixDx: 2,
            feColorMatrixBackdropColor: feColorMatrixCrystalBackdropColor,
            edgesColor: '#5E30CB', middleColor: '#9791CB',

          },
          positionInParallaxCanvas: {
            transform: {
              scale: 2,
              translateZ: 1
            },/* 'translateZ(1px) scale(1)' */
            xYPosition: {
              top: '400px',
              bottom: '',
              left: '0px',
              right: '',
            },
          }
        },
      ]
    },
  ]
}

export { feColorMatrixCrystalBackdropColor }

export default crystalParallaxDefault