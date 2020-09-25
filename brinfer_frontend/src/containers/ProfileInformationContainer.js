import React from 'react';
import {ProfileInfo} from '../components/ProfileInfo.js';

export class ProfileInfoContainer extends React.Component {
    constructor(props) {
        // Deve receber a informação sobre o utilizador a partir do parent Component
        super(props);

        this.state = { name: "Alvaro" };
    }

    render() {
        return <ProfileInfo name={this.state.name} />
    }
}