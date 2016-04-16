import React from 'react';
import request from 'superagent';

class Content extends React.Component {

    componentDidMount() {
        request
            .get('https://medium.com/@chrislaughlin/latest')
            .set('Accept', 'application/json')
            .set('Access-Control-Allow-Origin', '*')
            .end((err, res) => {
                console.log(res);
            });
    }

    render() {
        return (
            <div>
                CONTENT
            </div>
        );
    }
}

export default Content;
