import React from 'react';

class Loader extends React.Component {

    render() {
        const loader = this.props.loaded ? null : <div className='loader'></div>;
        return (
            <div>
                {loader}
            </div>
        );
    }
}

export default Loader;

