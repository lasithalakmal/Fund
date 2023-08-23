import { View, Text, TouchableOpacity, GestureResponderEvent } from 'react-native'
import React, { useState } from 'react'

const ButtonComp = ({ onPress, children }:
    { onPress: Function, children: string }) => {

    console.log(`${children} is re renderred`);

    return (
        <TouchableOpacity onPress={() => onPress()}>
            <View style={{ width: 200, height: 50,backgroundColor:'#555',
            justifyContent:'center',alignItems:'center',borderRadius:30 }}>
                <Text style={{color:'white'}}>{children}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default React.memo(ButtonComp)