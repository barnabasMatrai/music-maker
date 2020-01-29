import React, { Component } from 'react';

export class Piano extends Component {
    displayName = Piano.name

    playSound(e) {
        const key = e.currentTarget.id;
        var sound = new Audio();
        sound.src = 'http://localhost:8887/piano-' + key + '.wav';
        sound.play();
    }

    render() {
        return (
            <div>
                <img src={require('C:/Users/matra/OneDrive/Asztali gép/codecool/PET_projects/musicMaker/musicMaker/musicMaker/ClientApp/src/images/piano.png')} alt='piano' useMap='#keys' />
                <map name="keys">
                    <area id="c" shape="rect" coords="8,8,35,142" alt="c" onClick={this.playSound} />
                    <area id="d" shape="rect" coords="35,8,62,142," alt="d" onClick={this.playSound} />
                </map>
            </div>
        );
    }
}