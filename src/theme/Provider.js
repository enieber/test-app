import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'

import statusBarTheme from './statusBarTheme'

const Theme = props => {
  const { style, color } = statusBarTheme()
  return (
    <>
      <StatusBar
        backgroundColor={color}
        barStyle={style}
        animated
        networkActivityIndicatorVisible
      />
      <SafeAreaView>{props.children}</SafeAreaView>
    </>
  )
}

export default Theme
