import React from 'react';
import 'prismjs/themes/prism-okaidia.css';

import Header from '../components/header/header';

import '../styles/index.css';

class Template extends React.Component {
    render() {
        const {
            children
        } = this.props;

        return (
            <div
                style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
            >
                <Header/>
                {children()}
            </div>
        );
    }
}

export default Template;
