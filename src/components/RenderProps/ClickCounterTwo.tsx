import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const ClickCounterTwo = (props:any) => {
    return (
        <Button title={`Clicked ${props.count} times`} onPress={props.incrementCount} />
    )
}

export default ClickCounterTwo