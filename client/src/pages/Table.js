import React, { Component } from 'react';
import Table from '../components/Table/Table';
import styled from 'styled-components'
import tableData from '../tools/tableData.js'
import smallData from '../tools/smallData.js'
import Checkbox from '../components/Checkbox/Checkbox'


const Container = styled.div`
    display: flex;
    justify-content: space-around;
    padding-top: 0px;
    min-height: 100vh;
    flex-flow: column;
    align-items: center;
`

const headers = {
    checkbox: {
        content: <Checkbox />,
        sortable: false
    },
    id: {
        content: "ID",
        sortable: true
    },
    first_name: {
        content: "First Name",
        sortable: true
    },
    last_name: {
        content: "Last Name",
        sortable: true
    },
    email: {
        content: "Email",
        sortable: true
    },
    gender: {
        content: "Gender",
        sortable: true
    },
    address: {
        content: "Address",
        sortable: true
    }
}

export default class TablePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: smallData
        }
    }

    handleDropdownSelect = (e) => {
        const val = e.target.value
        const data = val == "smallData" ? smallData : tableData
        this.setState({ data })
    }

    render() {
        
        return (
            <Container>
                <div style={{textAlign: 'center' }}>
                    <select onChange={this.handleDropdownSelect}>
                        <option value="smallData">Small Set (10 rows)</option>
                        <option value="largeData">Large Set (10,000 rows)</option>
                    </select>
                    <p>Note: Changing this dropdown may take several seconds to see changes.</p>
                </div>
                <Table data={this.state.data} headers={headers} />
            </Container>
        )
    }
}
