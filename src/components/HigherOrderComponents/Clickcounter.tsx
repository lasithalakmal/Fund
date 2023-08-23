import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import WithCount from './withCounter';

const Clickcounter = (props:any) => {
    return (
        <View>
            <Button title={"Click " + props.count + " times"} onPress={props.incrementCount} />
            <Text>{props.click}  {props.count}</Text>
        </View>
    )
}

export default WithCount(Clickcounter,5)