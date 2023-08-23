import { View, Text } from 'react-native'
import React from 'react'

const TextComp = ({ count, compName }: { count: number, compName: string }) => {
    console.log(`${compName} component is re rendered`);
    return (
        <View>
            <Text>{count}</Text>
        </View>
    )
}

export default React.memo(TextComp)