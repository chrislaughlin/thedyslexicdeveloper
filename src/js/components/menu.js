import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import { Link } from 'react-router';
import Radium from 'radium';

let RadiumLink = Radium(Link);

export default React.createClass({
    render() {
        return (
            <Menu id='menu' pageWrapId={'main-content'} outerContainerId={'outer-container'}>
                <RadiumLink className="menu-item" to="/about">ABOUT</RadiumLink>
                <RadiumLink className="menu-item" to="/projects">PROJECTS</RadiumLink>
            </Menu>
        );
    }
});
