import { View, Text } from 'react-native'
import React from 'react'
import ClickCounterTwo from './ClickCounterTwo'
import TypeCounterTwo from './TypeCounterTwo'
import User from './User'
import Counter from './Counter'

const RenderPropsEx = () => {
    return (
        <View>
            <Counter>
                {(count, incrementCount) =>
                    <ClickCounterTwo count={count} incrementCount={incrementCount} />
                }
            </Counter>

            <Counter>
                {(count, incrementCount) =>
                    <TypeCounterTwo count={count} incrementCount={incrementCount} />
                }
            </Counter>

            {/*<ClickCounterTwo/>
      <TypeCounterTwo/>
      <User render={(isLoggedIn)=>(isLoggedIn)?'Lasitha':'Guest'}/>*/}
        </View>
    )
}

export default RenderPropsEx