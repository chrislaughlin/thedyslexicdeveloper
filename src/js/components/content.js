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
                    posts: body
                });
            });
    }

    componentWillMount() {
        this.setState({posts: []});
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
        return (
            <div className='main-content'>
                {this.renderPost()}
            </div>
        );
    }
}

export default Content;
