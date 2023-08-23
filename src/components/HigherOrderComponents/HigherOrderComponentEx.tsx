import { View, Text } from 'react-native'
import React from 'react'
import Clickcounter from './Clickcounter'
import HoverCountry from './HoverCountry'

const HigherOrderComponentEx = () => {
  return (
    <View>
      <Clickcounter click={'click'}/>
      <HoverCountry hover={'hover'}/>
    </View>
  )
}

export default HigherOrderComponentEx