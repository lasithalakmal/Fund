import { View, Text, Button } from 'react-native'
import React from 'react'
import { Connect, connect } from 'react-redux'
import { buyCake } from '../Redux'

const mapStateToProps = (state) => {
    return {
        numberOfCakes: state.cake.numberOfCakes
    }
}

const CakeContainer = (props) => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text>Number of cakes {props.numberOfCakes}</Text>
            <Button title='Buy cake' onPress={props.buyCake} />
        </View>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)