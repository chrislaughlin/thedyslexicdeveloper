import React from 'react';
import postStyles from 'styles/posts';
import { Link } from 'react-router';

export default class extends React.Component {

    render() {
        const { titleStyles, excerptStyles }  = postStyles;
        const { title, excerpt, id } = this.props;
        return (
            <div style={{width: '70%'}}>
                <h1 style={titleStyles}>
                    <Link to={`post/${id}`}>{title}</Link>
                </h1>
                <div style={excerptStyles}
                     dangerouslySetInnerHTML={{__html: excerpt.replace(/<a class="read-more".*a>/, '')}}></div>
            </div>
        );
    }
}
