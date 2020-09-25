import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../logo.svg';


export class ProfileInfo extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 profile-picture">
                        <img src={logo} />
                    </div>
                    <div className="col-sm-8 profile-info">
                        {this.props.name}
                    </div>
                </div>
            </div>
        )
    }
}