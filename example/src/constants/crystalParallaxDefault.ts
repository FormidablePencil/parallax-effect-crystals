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
    backgroundImage: 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v475-katie-101-abstractblackandwhitebg_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=86196a47d14e811c3149f69279f90c1e',
    bgImgX: '',
    bgImgY: '',
  },
  crystals: [
    {
      mediaQueryWidth: '',
      key: 8,
      shardIndex: 6,
      zIndex: 0,
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
          top: '100px',
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
            edgesColor: '#CB8B65', middleColor: '#F44083',
          },
          positionInParallaxCanvas: {
            transform: {
              scale: 2,
              translateZ: 1,
              rotateY: false,
              rotate: '',
            },
            xYPosition: {
              top: '100px',
              bottom: '',
              left: '100px',
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
            edgesColor: '#9DCB6F', middleColor: '#3ACB84',

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
  ]
}

export { feColorMatrixCrystalBackdropColor }

export default crystalParallaxDefault