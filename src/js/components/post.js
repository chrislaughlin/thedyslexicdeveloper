import React from 'react';
import request from 'superagent';
import Loader from 'components/loader';
import postStyles from 'styles/posts';
import PostFooter from 'components/postFooter';

export default class extends React.Component {

    componentDidMount() {
        const postId = this.props.params.id.slice(0, this.props.params.id.indexOf('&'));
        request
            .get(`http://christopherlaughlin.co.uk/wp-json/wp/v2/posts/${postId}`)
            .set('Accept', 'application/json')
            .end((err, {body}) => {
                this.setState({
                    post: body,
                    loaded: true
                });
            });
    }

    componentWillMount() {
        this.setState({
            post: {
                title: {},
                content: {}
            },
            loaded: false
        });
    }

    renderTitle() {
        return (
            <header>{this.state.post.title.rendered}</header>
        );
    }

    renderPostBody() {
        return (
            <div dangerouslySetInnerHTML={{__html: this.state.post.content.rendered}}></div>
        );
    }

    render() {
        const { titleStyles, excerptStyles }  = postStyles;
        return (
            <div className='post'>
                <Loader loaded={this.state.loaded} />
                <h1 style={titleStyles}>
                    {this.renderTitle()}
                </h1>
                <div style={Object.assign({}, excerptStyles, {paddingBottom: '25px'})}>
                    {this.renderPostBody()}
                </div>
                <PostFooter />
            </div>
        );
    }
}
