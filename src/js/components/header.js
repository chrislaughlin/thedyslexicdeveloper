import React from 'react';
import rowWithCentreContent  from 'styles/rowWithCentreContent';

export default class extends React.Component {
    render() {
        const bannerStyles = {
            height: '130px'
        };
        return (
            <div>
                <div style={rowWithCentreContent}>
                    <img style={bannerStyles} src='images/banner.jpg' />
                </div>
                <div style={rowWithCentreContent}>
                    <span>The Dyslexic Developer</span>
                </div>
            </div>
        );
    }
};

