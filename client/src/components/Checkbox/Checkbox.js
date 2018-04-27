import React, { Component } from 'react'
import styled from 'styled-components'


class Checkbox extends Component {
    render() {
        return (
            <label className='container' >
                <input type="checkbox" checked={this.props.checked} onChange={this.props.onChange}/>
                <span className="checkmark"></span>
            </label>

        )
    }
}

export default Checkbox;

