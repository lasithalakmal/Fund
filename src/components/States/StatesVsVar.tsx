import { View, Text, Button } from 'react-native'
import React, { useRef, useState } from 'react'
var x = 0;
const StatesVsVar = () => {


    const [y, setY] = useState(0);
    const txt = useRef<Text>();

    function incrementX() {
        x++;
    }

    function incrementY() {
        setY(y + 1);
    }

    return (
        <View>
            <Text ref={txt}>x = {x}, y = {y}</Text>
            <Button title='Increment X' onPress={incrementX} />
            <Button title='Increment Y' onPress={incrementY} />
        </View>
    )
}

export default StatesVsVar