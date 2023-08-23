import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

function Title() {
    console.log("Title is re rendered");
    return (
        <View>
            <Text>Use callback</Text>
        </View>
    )
}

export default React.memo(Title);

const styles = StyleSheet.create({})