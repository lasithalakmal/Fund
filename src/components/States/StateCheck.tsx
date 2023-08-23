import react, { useState } from 'react'
import { View } from 'react-native';
import StepCounterClassComponent from './StepCounterClassComponent';
import StepCounterFunctionalComponent from './StepCounterFunctionalComponent';

export default function StateDemo(){
    const [done,setDone] = useState(false);

    return (
        <View>
            {
                (!done)?
                <StepCounterClassComponent setDone={setDone} />
                :
                <StepCounterFunctionalComponent setDone={setDone}/>
            }
        </View>
    );
}