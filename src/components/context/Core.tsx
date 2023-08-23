import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from './ContextStore';

const Core = () => {

    const uc = useContext(UserContext);

    return (
        <View>
            <Text>{uc}</Text>
        </View>
    )
}

export default Core