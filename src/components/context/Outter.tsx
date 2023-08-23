import { View, Text } from 'react-native'
import React, { createContext } from 'react'
import Inner from './Inner'
import { useState } from 'react'
import { EmailContext, UserContext } from './ContextStore'

const Outter = () => {

    const [name, setName] = useState('Lasitha')

    return (
        <UserContext.Provider value={name} >
            <EmailContext.Provider value={'lasitha@gmail.com'} >
                <View>
                    <Inner />
                </View>
            </EmailContext.Provider>
        </UserContext.Provider>
    )
}

export default Outter