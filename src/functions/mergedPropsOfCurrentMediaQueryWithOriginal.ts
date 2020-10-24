// interface T { arrOfkeysAndMediaQueries: [], sourceOfTruthCrystalData }
// const mergedPropsOfCurrentMediaQueryWithOriginal = ({ dataCrystalDataOfMediaQuery, arrOfkeysAndMediaQueries, sourceOfTruthCrystalData }: T) => {
//   console.log(arrOfkeysAndMediaQueries, sourceOfTruthCrystalData)
//   const compiled = copyCrystalData.crystals.map(crystal => {
//     let isMatchingKey: boolean
//     for (let i = 0; i < arrOfkeysAndMediaQueries.length; i++)
//       if (crystal.key === arrOfkeysAndMediaQueries[i].key)
//         isMatchingKey = true


//     let mediaQueryDataImageProps = {}
//     if (mediaQueryData.crystalProps)
//       mediaQueryDataImageProps = mediaQueryData.imageProps


//     if (isMatchingKey) {
//       return {
//         ...crystal, ...mediaQueryData,
//         crystalProps: {
//           ...crystal.crystalProps, ...mediaQueryData.crystalProps,
//           imageProps: {
//             ...crystal.crystalProps.imageProps, ...[mediaQueryDataImageProps]
//           }
//         },
//         positionInParallaxCanvas: {
//           ...crystal.positionInParallaxCanvas, ...mediaQueryData.positionInParallaxCanvas
//         },
//       }
//     } else return crystal
//   })
// }

// export default mergedPropsOfCurrentMediaQueryWithOriginal


// export const mergeCrystalDataAndMediaQueryData = ({ mediaQueryData, crystalKey, sourceOfTruthCrystalData }: {
//   mediaQueryData, crystalKey, sourceOfTruthCrystalData
// }) => {
//   let copyCrystalData: crystalParallaxT = cloneDeep(sourceOfTruthCrystalData)


//   return compiled
// }
