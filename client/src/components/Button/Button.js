import styled from 'styled-components';
import React from 'react'
import PropTypes from 'prop-types'
import Link from '../Link/Link'

const StyledButton = styled.button`
    background-color: ${props => props.primary ? "#BEA5F0" : ""};
    color: ${props => props.primary ? "#fff" : ""};

`;

const Button = ({ primary, onClick, link, children, to, disabled }) => {
    
    return (
        <StyledButton primary={primary} onClick={onClick} disabled={disabled}>
            {link ?
                <Link to={to}>
                    {children}
                </Link> 
                :
                children
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