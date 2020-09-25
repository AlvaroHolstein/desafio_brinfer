import React from 'react';
import { Pictures } from '../components/Pictures.js'

export class PicturesContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = { pictures: [{ img: "A Carregar ..." }], port: "5005", wrongPort: false }
        this.fetchPicures = this.fetchPictures.bind(this);
        this.changePicturesState = this.changePicturesState.bind(this);
        this.changePortState = this.changePortState.bind(this);
    }

    componentDidMount() {
        this.fetchPictures();
    }

    changeWrongPortState() {
        this.setState({ wrongPort: true })
    }

    changePortState() {
        this.setState({ port: "5000" });
    }

    async fetchPictures() {
        try {
            let res = await fetch(`http://localhost:${this.state.port}/pics`);
            let final = await res.json();

            if (final.success) {
                this.changePicturesState(final.data);
            }
            else {
                this.changePicturesState([{ img: "An Error has Ocurred!" }]);
            }
        } catch (err) {
            // Para o caso de o port estar mal
            this.changePortState();
            this.fetchPictures();
        }
    }

    //Não consegui aprender o Mobx a tempo, dai não o usar
    changePicturesState(pictures) {
        this.setState({ pictures: pictures })
    }

    render() {
        return (
            <div>
                <Pictures pictures={this.state.pictures} />
            </div>
        );
    }
}