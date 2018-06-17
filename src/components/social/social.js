import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Twitter from 'react-icons/lib/fa/twitter';
import Instagram from 'react-icons/lib/fa/instagram';
import Github from 'react-icons/lib/fa/github';
import styled from 'styled-components';

const StyledSocial = styled.div`
  display: flex;
  margin: 10px;
  svg {
    margin: 5px;
  }
`;

class Social extends Component {
    static childContextTypes = {
        reactIconBase: PropTypes.object
    };

    getChildContext() {
        return {
            reactIconBase: {
                size: 24
            }
        }
    }

    render() {
        return (
            <StyledSocial>
                <Twitter/>
                <Instagram/>
                <Github/>
            </StyledSocial>
        );
    }
}

export default Social;