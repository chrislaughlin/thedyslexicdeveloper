/*eslint-disable */
import React from  'react';
/*eslint-enable */
import '../scss/main.scss';
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import ga from 'react-ga';
//Components
import Main from 'components/main';
import SideBar from 'components/sideBar';
import Post from 'components/post';
import About from 'components/about';
import Projects from 'components/projects';
import Content from 'components/content';

ga.initialize('UA-78587148-1');

hashHistory.listen(location => {
    ga.pageview(location.pathname);
});

render((
    <div id='outer-container'>
        <div className='flexbox-container'>
            <div className='left-panel'>
                <Router history={hashHistory}>
                    <Route path="/" component={Main}>
                        <IndexRoute component={Content} />
                        <Route path="/post/:id" component={Post}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/projects" component={Projects}></Route>
                    </Route>
                    <Route path="*" component={Main}/>
                </Router>
            </div>
            <SideBar />
        </div>
    </div>
), document.getElementById('content'));
