import React from 'react'

import Web from 'components/layout/Web'
import Tiles from 'components/misc/Tiles'
import Heading from 'components/views/home/Heading'
import Visualization from 'components/views/home/Visualizations'

export default function Home() {
  return (
    <Web>
      <Heading />
      <Visualization />
      <Tiles background title />
    </Web>
  )
}
