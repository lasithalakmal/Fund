import { View, Text, Button, GestureResponderEvent } from 'react-native'
import React, { useCallback, useState } from 'react'
import TextComp from './TextComp';
import Title from './Title';
import ButtonComp from './ButtonComp';

const UseCallBackEx = () => {

    const [marks, setMarks] = useState(0);
    const [coins, setCoins] = useState(0);

    const incrementMarks = useCallback(() => {
        setMarks(prevMakrs => prevMakrs + 1);
    }, [marks])

    const incrementCoins = useCallback(() => {
        setCoins(prevCoins => prevCoins + 1);
    }, [coins])

    console.log('------------------------ Parent')

    return (
        <View style={{ flex: 1, width: '100%', alignItems: 'center', paddingTop: 100 }}>
            <Title />
            <TextComp count={marks} compName='Marks' />
            <ButtonComp onPress={incrementMarks} >Increment Marks</ButtonComp>
            <TextComp count={coins} compName='Coins' />
            <ButtonComp onPress={incrementCoins} >Increment Coins</ButtonComp>
        </View>
    )
}

export default UseCallBackEx