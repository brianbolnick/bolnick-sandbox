import React, { Component } from 'react'
import styled from 'styled-components'
import TH from './TH'
import TD from './TD'
import TR from './TR'
import Checkbox from '../Checkbox/Checkbox'

const THEAD = styled.thead`
    background-color: #f5f5f5;
`

const StyledTable = styled.table`
    font-family: 'Lato', sans-serif;
    width: 90%;
    border-collapse: separate;
    border-left: 0;
    border-radius: 10px;
    border-spacing: 0px;

    tr:nth-child(even) {background: #f8f6ff; }
    tr:nth-child(odd) {background: #fff; }
`

class Table extends Component {

    constructor(props) {
        super(props)

        this.state = {
            headers: props.headers,
            data: props.data,
            sortOrder: "ASC"
        }
    }

    componentWillUpdate = () => {
        console.log("waiting")
    }

    componentDidUpdate = () => {
        console.log("remounted")
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.data !== this.props.data) {
            this.setState({ data: nextProps.data })
        }
    }

    handleSort = (col) => {
        const { headers, sortOrder } = this.state
        let data = this.state.data.sort((a, b) => {
            if (sortOrder == "ASC") {
                if (a[col] < b[col]) {
                    return 1;
                } else if (a[col] == b[col]) {
                    return 0;
                } else {
                    return -1;
                }
            }
            else {
                if (a[col] > b[col]) {
                    return 1;
                } else if (a[col] == b[col]) {
                    return 0;
                } else {
                    return -1;
                }
            }
        })
        this.setState({ data, sortOrder: sortOrder == "ASC" ? "DESC" : "ASC" })
    }

    render() {
        const { headers, data } = this.state
        const newHeaders = Object.keys(headers).map((header, index) => {
            let style = index == 0 ? { paddingLeft: '25px', borderTopLeftRadius: '10px' } : { paddingLeft: '' }
            style = index == Object.keys(headers).length - 1 ? { borderTopRightRadius: '10px' } : style
            return (
                <TH
                    style={style}
                    key={`header-${index}`}
                    sortable={headers[header].sortable}
                    onClick={() => this.handleSort(header)}
                >
                    {headers[header].content}
                </TH>
            )
        })

        const newData = data.map((row) => {
            return (
                <TR key={row.id}>
                    <TD style={{ paddingLeft: '25px' }}><Checkbox /></TD>
                    <TD>{row.id}</TD>
                    <TD>{row.first_name}</TD>
                    <TD>{row.last_name}</TD>
                    <TD>{row.email}</TD>
                    <TD>{row.gender}</TD>
                    <TD>{row.address}</TD>
                </TR>
            )
        })
        return (
            <StyledTable>
                <THEAD>
                    <tr>
                        {newHeaders}
                    </tr>
                </THEAD>

                <tbody>
                    {newData}
                </tbody>
            </StyledTable>
        )
    }
}

export default Table;