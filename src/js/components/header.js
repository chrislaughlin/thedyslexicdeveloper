import React from 'react';
import rowWithCentreContent  from 'styles/rowWithCentreContent';

export default class extends React.Component {

    constructor() {
        super();
        this.state = {image: 'grow'};
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {
        let scrollTop = event.srcElement.body.scrollTop;

        console.log('ScrollTop: ', scrollTop);
        this.setState({image: scrollTop > 166 ? 'shrink' : 'grow'});
    }

    render() {
        const bannerStyles = {
            height: this.state.image === 'grow' ? '130px' : '30px'
        };
        return (
            <div>
                <div style={rowWithCentreContent}>
                    <img ref='headerImage' style={bannerStyles} src='images/banner.jpg' />
                </div>
                <div ref='subText' style={rowWithCentreContent}>
                    <span>The Dyslexic Developer</span>
                </div>
            </div>
        );
    }
};

