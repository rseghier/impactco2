import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import {
  useQueryParam,
  StringParam,
  BooleanParam,
  withDefault,
} from 'use-query-params'

import StyleContext from 'utils/StyleContext'

const themes = {
  default: {
    name: 'Défaut',
    colors: {
      main: '#05386B',
      second: '#ffffdb',
      background: '#379683',
      text: '#ffffdb',
    },
    fonts: '"Montserrat", Arial, sans-serif',
  },
  classic: {
    name: 'Classique',
    colors: {
      main: '#32337B',
      second: '#fdfdfd',
      background: '#fdfdfd',
      text: '#32337B',
    },
    fonts: '"Montserrat", Arial, sans-serif',
  },
  night: {
    name: 'Nuit',
    colors: {
      main: '#fdfdfd',
      second: '#282c35',
      background: '#282c35',
      text: '#fdfdfd',
    },
    fonts: '"Montserrat", Arial, sans-serif',
  },
  accessible: {
    name: 'Accessible',
    colors: {
      main: 'black',
      second: 'white',
      background: 'white',
      text: 'black',
    },
    fonts: 'Arial, sans-serif',
  },
}
export default function CO2NumberProvider(props) {
  const [theme, setTheme] = useQueryParam(
    'theme',
    withDefault(StringParam, 'default')
  )

  const [displayTitle, setDisplayTitle] = useQueryParam(
    'title',
    withDefault(BooleanParam, true)
  )

  const [configuratorOpen, setConfiguratorOpen] = useState(false)

  return (
    <StyleContext.Provider
      value={{
        themes,
        theme,
        setTheme,
        displayTitle,
        setDisplayTitle,
        configuratorOpen,
        setConfiguratorOpen,
      }}
    >
      <ThemeProvider
        theme={{ colors: themes[theme].colors, fonts: themes[theme].fonts }}
      >
        {props.children}
      </ThemeProvider>
    </StyleContext.Provider>
  )
}