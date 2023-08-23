import { View, Text, Button } from 'react-native'
import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '.'

const mapStateToProps = (state) => {
    return {
        numberOfIceCreams: state.icecream.numberOfIceCreams
    }
}

const IceCreamContainer = (props) => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text>Number of IceCreams {props.numberOfIceCreams}</Text>
            <Button title='Buy IceCream' onPress={props.buyIceCream} />
        </View>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)