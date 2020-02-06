import React, { Component } from 'react';
import { MusicSheet } from './MusicSheet';
import axios from 'axios';

export class Piano extends Component {
    displayName = Piano.name
    state = {
        compositions: [],
        compositionToSave: []
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeydown);
        document.addEventListener("keydown", this.addNote);
        axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
        axios.get('https://localhost:44303/api/composition')
            .then(res => {
                const compositions = res.data;
                this.setState({ compositions });
            })
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeydown);
        document.removeEventListener("keydown", this.addNote);
    }

    addNote(e) {
        const keyboardKeys = {
            "a": "c",
            "s": "d",
            "d": "e",
            "f": "f",
            "g": "g",
            "h": "a",
            "j": "b"
        };

        if (e.key in keyboardKeys) {
            const musicSheet = document.getElementById('music_sheet');
            const note = document.createElement("img");
            note.className = keyboardKeys[e.key];
            note.src = 'http://localhost:8887/images/' + keyboardKeys[e.key] + '_note.png';
            musicSheet.appendChild(note);
        }
    }

    handleClick(e) {
        const key = e.currentTarget.id;
        const mySound = new Audio();
        mySound.src = 'http://localhost:8887/sounds/piano-' + key + '_major.wav';
        mySound.play();
    }

    handleKeydown(e) {
        const keyboardKeys = {
            "a": "c",
            "s": "d",
            "d": "e",
            "f": "f",
            "g": "g",
            "h": "a",
            "j": "b"
        };

        if (e.key in keyboardKeys) {
            const mySound = new Audio();
            mySound.src = 'http://localhost:8887/sounds/piano-' + keyboardKeys[e.key] + '_major.wav';
            mySound.play();
        }
    }

    saveComposition() {
        const notes = document.getElementById("music_sheet").children;
        let notesString = [];
        const saveName = document.getElementById("save_name");

        Array.from(notes).forEach(function (element) {
            notesString.push(element.className);
        });
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

        const composition = {
            title: saveName.value,
            notes: notesString.join("")
        }

        axios.post('https://localhost:44303/api/composition', composition);
    }

    render() {
        return (
            <div>
                <img src='http://localhost:8887/images/piano.png' alt='piano' useMap='#keys' />
                <map name="keys">
                    <area id="c" shape="rect" coords="8,8,35,142" alt="c" onClick={this.handleClick} />
                    <area id="d" shape="rect" coords="35,8,62,142," alt="d" onClick={this.handleClick} />
                    <area id="e" shape="rect" coords="62,8,89,142," alt="e" onClick={this.handleClick} />
                    <area id="f" shape="rect" coords="89,8,116,142," alt="f" onClick={this.handleClick} />
                    <area id="g" shape="rect" coords="116,8,143,142," alt="g" onClick={this.handleClick} />
                    <area id="a" shape="rect" coords="143,8,170,142," alt="a" onClick={this.handleClick} />
                    <area id="b" shape="rect" coords="170,8,197,142," alt="b" onClick={this.handleClick} />
                </map>
                <MusicSheet />
                <ul>
                    {this.state.compositions.map(composition => <li key={composition.id} >{composition.title}</li>)}
                </ul>
                <input id="save_name" />
                <button onClick={this.saveComposition}>Save composition</button>
            </div>
        );
    }
}