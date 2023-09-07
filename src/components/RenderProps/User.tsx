import { View, Text } from 'react-native'
import React from 'react'

const User = (props:any) => {
  return (
    <View>
      <Text>{props.render(true)}</Text>
    </View>
  )
}

export default User