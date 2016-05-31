import React from 'react';
import request from 'superagent';
import Loader from 'components/loader';
import postStyles from 'styles/posts';

export default class extends React.Component {

    componentDidMount() {
        request
            .get(`http://christopherlaughlin.co.uk/wp-json/wp/v2/posts/${this.props.params.id}`)
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
                <div style={excerptStyles}>
                    {this.renderPostBody()}
                </div>
            </div>
        );
    }
}
