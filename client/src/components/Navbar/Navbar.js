import styled from 'styled-components';
import React from 'react'
import PropTypes from 'prop-types'


const StyledNavbar = styled.div`
    font-family: 'Encode Sans Semi Condensed', sans-serif;
    width: 30%;
    display: flex;
    margin-left: auto;
    justify-content: space-between;
`

const Navbar = ({ children }) => {
    return (
        <StyledNavbar>
            {children}
        </StyledNavbar>
    )
}

Navbar.propTypes = {
    children: PropTypes.any
}

export default Navbar;