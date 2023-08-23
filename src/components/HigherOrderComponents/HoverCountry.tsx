import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import WithCount from './withCounter';

function HoverCountry(props:any) {

    return (
        <View>
            <TextInput onChange={props.incrementCount} style={{backgroundColor:'#eee'}} />
            <Text>{props.hover} {props.count}</Text>
        </View>
    )
}

export default WithCount(HoverCountry,10);