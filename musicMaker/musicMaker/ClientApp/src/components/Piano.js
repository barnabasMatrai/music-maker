import React, { Component } from 'react';

export class Piano extends Component {
    displayName = Piano.name

    playSound() {
        var sound = new Audio();
        sound.src = 'http://localhost:8887/piano-c.wav';
        sound.play();
    }

    render() {
        return (
            <div>
                <img src={require('C:/Users/matra/OneDrive/Asztali gép/codecool/PET_projects/musicMaker/musicMaker/musicMaker/ClientApp/src/images/piano.png')} alt='piano' useMap='#keys' />
                <map name="keys">
                    <area shape="rect" coords="8,8,35,142" alt="C" onClick={this.playSound} />
                </map>
            </div>
        );
    }
}