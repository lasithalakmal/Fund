import { View, Text, Button } from 'react-native'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyCake } from './cake/CakeActions'

const HooksCakeContainer = () => {

    const numOfCakes = useSelector((state:any)=>state.cake.numberOfCakes)

    const dispatch = useDispatch()

    return (
        <View>
            <Text>Num of cakes - {numOfCakes}</Text>
            <Button title='Buy cake' onPress={()=>dispatch(buyCake())} />
        </View>
    )
}

export default HooksCakeContainer