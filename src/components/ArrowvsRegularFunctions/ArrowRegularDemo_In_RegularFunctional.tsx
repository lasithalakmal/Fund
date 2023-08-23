import { Text, View } from 'react-native'
import React from 'react'

class Aa {
    i = 20;
    y = {
        i: 10,
        arrowFunction: () => {
            console.log(this.i);
        },
        normalFunction: function () {
            console.log(this.i);
        }
    }
}

const outterArrow = (name)=>{
    name = "Abc";
    //console.log(this);
}

const ar1 = new outterArrow('abc');//No error

export default function ArrowRegularDemo_In_Functional() {

    const outterArrow2 = (name)=>{
        name = "Abc";
        console.log(this);
    };
    
    const ar2 = new outterArrow2('abc');//No error

    return (
        <View>
            <Text>ArrowRegularDemo_In_Functional</Text>
        </View>
    )
}