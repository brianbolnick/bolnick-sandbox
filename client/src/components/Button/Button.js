import styled from 'styled-components';
import React from 'react'
import PropTypes from 'prop-types'
import Link from '../Link/Link'

const StyledButton = styled.button`
    background: ${props => props.primary ? "#BEA5F0" : "rgba(0, 0, 0, 0.2)"};
    color: ${props => props.primary ? "#fff" : ""};
    height: 50px;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    color: #FFF;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 4px;
    /* background: rgba(0, 0, 0, 0.2); */
    padding: 10px 20px;
    transition: all .5s ease;
    border-radius: 3px;
    cursor: pointer;
    border: none;

    &:hover {
        box-shadow: 0 20px 5px -10px #21212196;
        transform: translateY(10px);
    }
`;

const Children = styled.span`
    text-decoration: none;
    color: #FFF;
    padding: 0;
    margin: 0;
    font-weight: 100;
`


const Button = ({ primary, onClick, link, children, to, disabled }) => {

    return (
        <StyledButton primary={primary} onClick={onClick} disabled={disabled}>
            {link ? (
                <Link to={to}>
                    <Children>
                        {children}
                    </Children>
                </Link>)
                :
                (<Children>
                    {children}
                </Children>)
            }
        </StyledButton>
    )
}

Button.propTypes = {
    primary: PropTypes.bool,
    onClick: PropTypes.func,
    link: PropTypes.bool,
    to: PropTypes.string,
    children: PropTypes.any,
    disabled: PropTypes.bool
}

export default Button;