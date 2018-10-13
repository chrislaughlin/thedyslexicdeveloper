import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    FaTwitter,
    FaInstagram,
    FaGithub,
} from 'react-icons/fa';
import styled from 'styled-components';

const StyledSocial = styled.div`
  display: flex;
  margin: 10px;
  svg {
    margin: 5px;
  }
  a {
    color: #000000;
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
                <a
                    href="http://twitter.com/chrislaughlin"
                    target="_blank"
                >
                    <FaTwitter/>
                </a>
                <a
                    href="http://instagram.com/chrislaughlin"
                    target="_blank"
                >
                    <FaInstagram/>
                </a>
                <a
                    href="http://github.com/chrislaughlin"
                    target="_blank"
                >
                    <FaGithub/>
                </a>
            </StyledSocial>
        );
    }
}

export default Social;