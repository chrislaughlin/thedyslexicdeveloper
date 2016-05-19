import React from 'react';
import Header from 'components/header';
import Content from 'components/content';

class Main extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default Main;
