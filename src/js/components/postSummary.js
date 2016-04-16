import React from 'react';

export default class extends React.Component {

    render() {
        const titleStyles = {
            fontFamily: 'medium-content-sans-serif-font,"Lucida Grande","Lucida Sans Unicode","Lucida Sans",Geneva,Arial,sans-serif',
            fontWeight: '700',
            fontStyle: 'normal',
            fontSize: '30px'
        };
        const excerptStyles = {
            fontFamily: 'medium-content-serif-font,Georgia,Cambria,"Times New Roman",Times,serif',
            fontWeight: '400',
            fontStyle: 'normal',
            fontSize: '21px',
            lineHeight: '1.58',
            letterSpacing: '-.003em'
        };
        const { title, excerpt } = this.props;
        return (
            <div style={{width: '70%'}}>
                <h1 style={titleStyles}>{title}</h1>
                <div style={excerptStyles} dangerouslySetInnerHTML={{__html: excerpt}}></div>
            </div>
        );
    }
}
