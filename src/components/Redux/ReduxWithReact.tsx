import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CakeContainer from './CakeContainer'
import HooksCakeContainer from './HooksCakeContainer'
import IceCreamContainer from './IceCreamContainer'

export default function ReduxWithReact() {
    return (
        <View>
            <CakeContainer />
            <HooksCakeContainer />
            <IceCreamContainer />
        </View>
    )
}

const styles = StyleSheet.create({})