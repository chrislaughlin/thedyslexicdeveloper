import React from 'react';
import Header from 'components/header';
import Content from 'components/content';
import Menu from 'components/menu';

class Main extends React.Component {
    render() {
        return (
            <div>
                <Menu />
                <div id='main-content'>
                    <Header />
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Main;
