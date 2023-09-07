import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function Counter(props: any) {

    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    }

    return (
        <View>
            {props.children(count, incrementCount)}
        </View>
    )
}

const styles = StyleSheet.create({})