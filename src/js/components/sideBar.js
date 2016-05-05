import React from 'react';
import rowWithCentreContent  from 'styles/rowWithCentreContent';
const socialMedia = {
    github: 'http://github.com/chrislaughlin',
    instagram: 'http://instagram.com/chrislaughlin',
    twitter: 'http://twitter.com/chrislaughlin'
};

export default class extends React.Component {

    openNewWindow(type) {
        window.open(socialMedia[type], '_blank');
    }

    render() {
        return (
            <div className='side-bar'>
                <div className='title'>
                    <span>the</span>
                    <span>dyslexic</span>
                    <span>developer</span>
                </div>
                <div className='social'>
                    <img src='images/social/github.png' onClick={this.openNewWindow.bind(this, 'github')} />
                    <img src='images/social/instagram.png' onClick={this.openNewWindow.bind(this, 'instagram')} />
                    <img src='images/social/twitter.png' onClick={this.openNewWindow.bind(this, 'twitter')} />
                </div>
            </div>
        );
    }
};
