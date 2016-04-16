import React from 'react';

export default class extends React.Component {

    render() {
        const { title, excerpt } = this.props;
        return (
            <div>
                <h1>{title}</h1>
                <p dangerouslySetInnerHTML={{__html: excerpt}}></p>
            </div>
        );
    }
}
