import { View, Text, Button, TouchableOpacity } from 'react-native'
import React, { useMemo, useState } from 'react'

export default function UseMemoEx() {

    const [marks, setMarks] = useState(0);
    const [rating, setRating] = useState(0);

    const getStatus = () => useMemo(
        function () {
            let i = 0;
            while (i < 20000000)
                i++;
            return (marks > 75) ? 'Pass' : 'Fail';
        }, [marks]
    );

    return (
        <View>
            <Text>Marks is {marks} and the User is {getStatus()}</Text>
            <Text>User rating is {rating}</Text>
            <TouchableOpacity onPress={() => setMarks(marks + 20)} >
                <Text style={{ padding: 20, backgroundColor: '#444' }}>Increase Marks</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setRating(rating + 1)} >
                <Text style={{ padding: 20, backgroundColor: '#444' }}>Increase Ratings</Text>
            </TouchableOpacity>
        </View>
    )
}