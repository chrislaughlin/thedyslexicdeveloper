import React from 'react';
import request from 'superagent';
import PostSummary from 'components/postSummary';
import rowWithCentreContent  from 'styles/rowWithCentreContent';
import Loader from 'components/loader';

class Content extends React.Component {

    componentDidMount() {
        request
            .get('http://christopherlaughlin.co.uk/wp-json/wp/v2/posts?context=embed')
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
                excerpt={post.excerpt.rendered}
                id={post.id} />;
        });
    };

    render() {
        return (
            <div className='main-content'>
                <Loader loaded={this.state.loaded} />
                {this.renderPost()}
            </div>
        );
    }
}

export default Content;
