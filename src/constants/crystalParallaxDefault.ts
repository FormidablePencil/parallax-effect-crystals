import { crystalParallaxT } from './crystalDataTypes'

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
    backgroundImage: '',
    bgImgX: '',
    bgImgY: ''
  },
  crystals: [
    {
      mediaQueryWidth: '',
      key: 7,
      shardIndex: 5,
      zIndex: 1,
      crystalProps: {
        imageProps: {
          image:
            'https://purepng.com/public/uploads/large/purepng.com-pokemonpokemonpocket-monsterspokemon-franchisefictional-speciesone-pokemonmany-pokemonone-pikachu-1701527784579tobow.png',
          x: 50,
          y: 10,
          height: 225,
          width: 225
        },
        translateX3d: 3.5,
        translateY3d: -2.5,
        feColorMatrixDx: 5,
        feColorMatrixDy: 5,
        feColorMatrixStdDeviation: 1,
        edgesColor: '#5C8AE4',
        middleColor: '#F62E34',
        feColorMatrixBackdropColor: feColorMatrixCrystalBackdropColor
      },
      positionInParallaxCanvas: {
        transform: {
          scale: 2,
          translateZ: 1,
          rotateY: false,
          rotate: ''
        } /* 'translateZ(1px) scale(1)' */,
        xYPosition: {
          top: '800px',
          bottom: '',
          left: '100px',
          right: ''
        }
      },
      mediaQueries: [
        /* append data for mediaQueries that is different than it's main */
        {
          mediaQueryWidth: 555,
          shardIndex: 0,
          zIndex: 0,
          crystalProps: {
            imageProps: {
              x: 50,
              y: 10,
              height: 225,
              width: 225
            },
            translateX3d: 3.5,
            translateY3d: 3.5,
            feColorMatrixDx: 2,
            feColorMatrixBackdropColor: feColorMatrixCrystalBackdropColor,
            edgesColor: '#5C8AE4',
            middleColor: '#F62E34'
          },
          positionInParallaxCanvas: {
            transform: {
              scale: 1,
              translateZ: 3,
              rotateY: false,
              rotate: ''
            },
            xYPosition: {
              top: '100px',
              bottom: '',
              left: '0px',
              right: ''
            }
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
              width: 225
            },
            translateX3d: 3.5,
            translateY3d: 3.5,
            feColorMatrixDx: 2,
            feColorMatrixBackdropColor: feColorMatrixCrystalBackdropColor,
            edgesColor: '#5C8AE4',
            middleColor: '#F62E34'
          },
          positionInParallaxCanvas: {
            transform: {
              scale: 2,
              translateZ: 1
            } /* 'translateZ(1px) scale(1)' */,
            xYPosition: {
              top: '100px',
              bottom: '',
              left: '100px',
              right: ''
            }
          }
        }
      ]
    },
    {
      mediaQueryWidth: '',
      key: 8,
      shardIndex: 6,
      zIndex: 0,
      crystalProps: {
        imageProps: {
          image:
            'https://vignette.wikia.nocookie.net/nintendo/images/a/ac/Detective_Pikachu_-_Character_artwork_02.png/revision/latest/scale-to-width-down/2000?cb=20180113042004&path-prefix=en',
          x: 100,
          y: 50,
          height: 325,
          width: 325
        },
        translateX3d: -5.5,
        translateY3d: 9.5,
        feColorMatrixDx: 5,
        feColorMatrixDy: 5,
        feColorMatrixStdDeviation: 1,
        edgesColor: '#5E30CB',
        middleColor: '#9791CB',
        feColorMatrixBackdropColor: feColorMatrixCrystalBackdropColor
      },
      positionInParallaxCanvas: {
        transform: {
          scale: 2,
          translateZ: 1,
          rotateY: false,
          rotate: ''
        } /* 'translateZ(1px) scale(1)' */,
        xYPosition: {
          top: '400px',
          bottom: '',
          left: '0px',
          right: ''
        }
      },
      mediaQueries: [
        /* append data for mediaQueries that is different than it's main */
        {
          mediaQueryWidth: 555,
          shardIndex: 0,
          zIndex: 0,
          crystalProps: {
            imageProps: {
              x: 50,
              y: 10,
              height: 225,
              width: 225
            },
            translateX3d: 3.5,
            translateY3d: 3.5,
            feColorMatrixDx: 2,
            feColorMatrixBackdropColor: feColorMatrixCrystalBackdropColor,
            edgesColor: '#5E30CB',
            middleColor: '#9791CB'
          },
          positionInParallaxCanvas: {
            transform: {
              scale: 2,
              translateZ: 1,
              rotateY: false,
              rotate: ''
            },
            xYPosition: {
              top: '400px',
              bottom: '',
              left: '0px',
              right: ''
            }
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
              width: 225
            },
            translateX3d: 3.5,
            translateY3d: 3.5,
            feColorMatrixDx: 2,
            feColorMatrixBackdropColor: feColorMatrixCrystalBackdropColor,
            edgesColor: '#5E30CB',
            middleColor: '#9791CB'
          },
          positionInParallaxCanvas: {
            transform: {
              scale: 2,
              translateZ: 1
            } /* 'translateZ(1px) scale(1)' */,
            xYPosition: {
              top: '400px',
              bottom: '',
              left: '0px',
              right: ''
            }
          }
        }
      ]
    }
  ]
}

export { feColorMatrixCrystalBackdropColor }

export default crystalParallaxDefault
