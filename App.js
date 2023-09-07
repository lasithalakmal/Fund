
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import store from './src/components/Redux/Store';
import { Provider } from 'react-redux'
import HigherOrderComponentEx from './src/components/HigherOrderComponents/HigherOrderComponentEx';
import RenderPropsEx from './src/components/RenderProps/RenderPropsEx';
import PhpCommunicateEx from './src/components/PHPCommunicate/PhpCommunicateEx';
import { DefaultTheme, PaperProvider } from 'react-native-paper';
import ReduxWithReact from './src/components/Redux/ReduxWithReact';

export default function App() {

    const theme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            primary: '#1caafc',
            secondary: '#91d7ff',
            outline: '#ccc',
        },
    };

    return (
        <Provider store={store}>
            <PaperProvider theme={theme}>
                <SafeAreaView>
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
                        <ReduxWithReact />
                        {/*<HigherOrderComponentEx />*/}
                        {/*<RenderPropsEx />*/}
                        <PhpCommunicateEx />
                    </View>
                </SafeAreaView>
            </PaperProvider>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
