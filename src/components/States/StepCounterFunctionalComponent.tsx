import react, { useEffect, useState } from 'react'
import { View, Text, Button } from 'react-native';

type IProps = {
    setDone: Function;
}

var prevCount = 0;

export default function StepCounterFunctionalComponent(props: IProps) {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("SC constructor");
        console.log("SC componentDidMount");
        return()=>{
            console.log("SC componentWillUnmount");
        }
    }, []);

    useEffect(() => {
        console.log('SC componentDidUpdate ' + count + " " + prevCount);
        prevCount = count;
        if (count == 5) {
            props.setDone(false);
        }
    }, [count]);

    return (
        <View>
            <Text>Welcome to functional component  {count} </Text>
            <Button title='functional click' onPress={() => setCount(count + 1)} />
        </View>
    );
}