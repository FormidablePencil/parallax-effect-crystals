# parallax-effect-crystals

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/parallax-effect.svg)](https://www.npmjs.com/package/parallax-effect) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save parallax-effect-crystals
or 
yarn add parallax-effect-crystals
```

## Usage

```tsx
import React from 'react'
import { CrystalParallaxProvider, CrystalParallax } from 'parallax-effect-crystals'
import 'parallax-effect-crystals/dist/index.css'
import crystalParallaxDefault from './constants/crystalParallaxDefault'

const App = () => {
  return (
    <CrystalParallaxProvider>
      <CrystalParallax
        pulledRawCrystalData={crystalParallaxDefault} />
    </CrystalParallaxProvider>
  )
}

```

## License

MIT © [Dennis Aleksandrov](https://github.com/FormidablePencil)
