import styled from 'styled-components';
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Styled = styled(Link) `
  color: ${props => props.dark ? "palevioletred" : "white"};
  font-weight: bold;
  font-family: 'Encode Sans Semi Condensed', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  transition: ease 0.3s;

`;

const StyledDiv = styled.div`
    transition: ease 0.3s;
    &:hover {
        transform: translateY(-3px);        
    }
`

const StyledLink = ({ dark, to, children }) => {
    return (
        <StyledDiv>
            <Styled to={to} dark={dark}>
                {children}
            </Styled>
        </StyledDiv>
    )
}

StyledLink.propTypes = {
    dark: PropTypes.bool,
    children: PropTypes.any,
    to: PropTypes.string
}

export default StyledLink;