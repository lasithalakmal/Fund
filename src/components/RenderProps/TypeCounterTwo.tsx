import { View, Text, Button, TextInput } from 'react-native'
import React, { useState } from 'react'

const TypeCounterTwo = (props:any) => {
    return (
        <View>
            <TextInput style={{backgroundColor:'#eee',height:50}} onChange={props.incrementCount} />
            <Text>{"Typed " + props.count + " Times"}</Text>
        </View>
    )
}

export default TypeCounterTwo