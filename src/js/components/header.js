import React from 'react';
import rowWithCentreContent from 'styles/rowWithCentreContent';
import { Link } from 'react-router';

export default class extends React.Component {

    render() {
        const bannerStyles = {
            height: '130px'
        };
        return (
            <div>
                <div style={rowWithCentreContent}>
                    <Link to={'/'}>
                        <img ref='headerImage' style={bannerStyles} src='images/banner.jpg' />
                    </Link>
                </div>
            </div>
        );
    }
};

