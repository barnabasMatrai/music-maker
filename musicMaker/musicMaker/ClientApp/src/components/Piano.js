import React, { Component } from 'react';

export class Piano extends Component {
    displayName = Piano.name

    playSound() {
        alert("Die");
    }

    render() {
        return (
            <div>
                <img src={require('C:/Users/matra/OneDrive/Asztali gép/codecool/PET_projects/musicMaker/musicMaker/musicMaker/ClientApp/src/images/piano.png')} alt='piano' useMap='#keys' />
                <map name="keys">
                    <area shape="rect" coords="8,8,38,140" alt="C" onClick={this.playSound} />
                </map>
            </div>
        );
    }
}