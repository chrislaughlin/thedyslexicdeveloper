import React from 'react';

class PostFooter extends React.Component {
    render() {
        return (
            <div className='post-footer'>
                If you have any comments you can tweet me
                <a href='http://twitter.com/chrislaughlin' target='_blank'> @chrislaughlin</a>
            </div>
        );
    }
}

export default PostFooter;
