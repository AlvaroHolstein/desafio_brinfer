import React from 'react';

export class Pictures extends React.Component {

    render() {
        return (
            <div className="row">
                {this.props.pictures.map((picture, index) => {
                    return <div key={index} className="col-sm-4"><img style={{maxWidth: "100%"}} src={picture.img}/></div>
                })}
            </div>
        )
    }
}