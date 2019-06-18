/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, ScrollView, Button} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});
type Props = {};
export default class App extends Component<Props> {

    async handleAddressChange() {
        const MY_API_KEY = "AIzaSyBLR5h-X4qloEc-pdtfpRw2CzvFHIcE7jU";
        const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${MY_API_KEY}&input=Yerevan`;
        try {
            const result = await fetch(url);
            const json = await result.json();
            this.setState({addressPredictions: json.predictions});
            console.log(json);
        } catch (err) {
            console.error(err);
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <Button onPress={() => this.handleAddressChange()} title={"Press me"}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
