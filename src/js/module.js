/*eslint-disable */
import React from  'react';
/*eslint-enable */

import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import Main from 'components/main';

render((
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <Route path="*" component={Main}/>
        </Route>
    </Router>
), document.getElementById('content'));
