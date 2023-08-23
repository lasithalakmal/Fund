
import { StyleSheet, Text, View } from 'react-native';
import store from './src/components/Redux/Store';
import { Provider } from 'react-redux'
import HigherOrderComponentEx from './src/components/HigherOrderComponents/HigherOrderComponentEx';

export default function App() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                {/*<StateDemo />*/}
                {/*<ArrowRegularDemo_In_Functional/>*/}
                {/*<GeneratorFunctions/>*/}
                {/*<VarLetConst/>*/}
                {/*<Outter/>*/}
                {/*<SingleReducer/>*/}
                {/*<CombineReducerEx/>*/}
                {/*<UseCallBackEx/>*/}
                {/*<UseMemoEx/>*/}
                {/*<StatesVsVar />*/}
                {/*<ReduxWithOnlineData />*/}
                {/*<ReduxWithReact/>*/}
                <HigherOrderComponentEx />
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
