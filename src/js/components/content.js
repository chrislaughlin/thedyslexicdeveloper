import React from 'react';
import request from 'superagent';
import PostSummary from 'components/postSummary';
import rowWithCentreContent  from 'styles/rowWithCentreContent';

class Content extends React.Component {

    componentDidMount() {
        request
            .get('http://christopherlaughlin.co.uk/wp-json/wp/v2/posts')
            .set('Accept', 'application/json')
            .end((err, {body}) => {
                this.setState({
                    posts: body,
                    loaded: true
                });
            });
    }

    componentWillMount() {
        this.setState({posts: [], loaded: false});
    }

    renderPost = () => {
        return this.state.posts.map((post, index) => {
            return <PostSummary
                key={index}
                title={post.title.rendered}
                excerpt={post.excerpt.rendered} />;
        });
    };

    render() {
        const loader = this.state.loaded ? null : <div className='loader'></div>;
        return (
            <div className='main-content'>
                {loader}
                {this.renderPost()}
            </div>
        );
    }
}

export default Content;
