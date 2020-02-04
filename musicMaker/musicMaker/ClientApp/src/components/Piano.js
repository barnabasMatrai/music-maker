import React, { Component } from 'react';
import { MusicSheet } from './MusicSheet';

export class Piano extends Component {
    displayName = Piano.name

    componentDidMount() {
        document.addEventListener("keydown", this.playSoundWithKeyboard);
        document.addEventListener("keydown", this.addNote);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.playSoundWithKeyboard);
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
            note.src = 'http://localhost:8887/images/' + keyboardKeys[e.key] + '_note.png';
            musicSheet.appendChild(note);
        }
    }

    playSound(e) {
        const key = e.currentTarget.id;
        const mySound = new Audio();
        mySound.src = 'http://localhost:8887/sounds/piano-' + key + '_major.wav';
        mySound.play();
    }

    playSoundWithKeyboard(e) {
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

    render() {
        return (
            <div>
                <img src={require('C:/Users/matra/OneDrive/Asztali gép/codecool/PET_projects/musicMaker/musicMaker/musicMaker/ClientApp/src/images/piano.png')} alt='piano' useMap='#keys' />
                <map name="keys">
                    <area id="c" shape="rect" coords="8,8,35,142" alt="c" onClick={this.playSound} />
                    <area id="d" shape="rect" coords="35,8,62,142," alt="d" onClick={this.playSound} />
                    <area id="e" shape="rect" coords="62,8,89,142," alt="e" onClick={this.playSound} />
                    <area id="f" shape="rect" coords="89,8,116,142," alt="f" onClick={this.playSound} />
                    <area id="g" shape="rect" coords="116,8,143,142," alt="g" onClick={this.playSound} />
                    <area id="a" shape="rect" coords="143,8,170,142," alt="a" onClick={this.playSound} />
                    <area id="b" shape="rect" coords="170,8,197,142," alt="b" onClick={this.playSound} />
                </map>
                <MusicSheet />
            </div>
        );
    }
}