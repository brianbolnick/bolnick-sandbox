import React, { Component } from 'react'
import styled from 'styled-components'
import sort from './sort.svg';
const StyledTH = styled.th`
    padding: 10px 30px;
    height: 45px;
    text-align: left;
    font-family: 'Lato', sans-serif;
    font-size: 18px;
    color: #fff;
    line-height: 1.4;
    background-color: #6c7ae0;

    &:hover {
        cursor: pointer;
    }

    &::after { 
        content: "";
        display: inline-flex;
        height:13px;
        width:15px;
        background-size: ${ props => props.sortable ? "15px 15px" : '0 0' };
        background-image: ${ props => props.sortable ? `url(${sort})` : '' };        
        background-repeat: no-repeat;
        margin-left: 10px;
    }
`

class TH extends Component {

    render() {
        const { children, sortable} = this.props;
        return (
            <StyledTH onClick={this.props.onClick} sortable={sortable}>
                {children}
            </StyledTH>
        )
    }
}

export default TH