import React, { Component } from 'react';
import { Piano } from './components/Piano';

export default class App extends Component {
    displayName = App.name

    render() {
        return (
            <Piano />
        );
    }
}
