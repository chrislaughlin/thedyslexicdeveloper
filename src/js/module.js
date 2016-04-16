/*eslint-disable */
import React from  'react';
/*eslint-enable */
import '../scss/main.scss';
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import Main from 'components/main';
import Header from 'components/header';

render((
    <div>
        <Header />
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <Route path="*" component={Main}/>
            </Route>
        </Router>
    </div>
), document.getElementById('content'));
