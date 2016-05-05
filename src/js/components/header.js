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
                    <img ref='headerImage' style={bannerStyles} src='images/banner.jpg' />
                </div>
                <div ref='subText' style={rowWithCentreContent}>
                    {/*<span>The Dyslexic Developer</span>*/}
                </div>
            </div>
        );
    }
};

