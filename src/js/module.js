/*eslint-disable */
import React from  'react';
/*eslint-enable */
import '../scss/main.scss';
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Main from 'components/main';
import Header from 'components/header';
import SideBar from 'components/sideBar';
import Post from 'components/post';
import Content from 'components/content';

render((
    <div>
        <div className='flexbox-container'>
            <div>
                <Header />
                <Router history={hashHistory}>
                    <Route path="/" component={Main}>
                        <IndexRoute component={Content} />
                        <Route path="post/:id" component={Post}></Route>
                    </Route>
                </Router>
            </div>
            <SideBar />
        </div>
    </div>
), document.getElementById('content'));
