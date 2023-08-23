import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'

interface IState {
    count: number;
}

interface IProps {
    setDone: Function;
}


export default class StepCounterClassComponent extends Component<IProps, IState>{

    constructor(props: IProps) {
        super(props);
        console.log("StepCounter constructor")
        this.state = {
            count: 0
        }
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.log("StepCounter componentDidCatch")
    }

    componentDidMount(): void {
        console.log("StepCounter componentDidMount")
    }

    componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any): void {
        console.log("StepCounter componentDidUpdate " + this.state.count + " " + prevState.count)
        if (this.state.count == 5) {
            this.props.setDone(true);
        }
    }

    componentWillUnmount(): void {
        console.log("StepCounter componentWillUnmount")
    }

    render(): React.ReactNode {
        return (
            <View>
                <Text>Welcome to class component {this.state.count} </Text>
                <Button title='class click' onPress={() => this.setState({
                    count: this.state.count + 1
                })} />
            </View>
        );
    }

}
