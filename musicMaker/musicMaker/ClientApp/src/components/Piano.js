import React, { Component } from 'react';

export class Piano extends Component {
    displayName = Piano.name

    render() {
        return (
            <div>
                <img src={require('C:/Users/matra/OneDrive/Asztali gép/codecool/PET_projects/musicMaker/musicMaker/musicMaker/ClientApp/src/images/piano.png')} alt='piano' />
            </div>
        );
    }
}