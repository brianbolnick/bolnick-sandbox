import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Table from './Table';
import Checkbox from '../Checkbox/Checkbox';

const tableData = [
    { "id": 1, "first_name": "Milty", "last_name": "Sealey", "email": "msealey0@google.co.uk", "gender": "Male", "address": "3363 Northport Pass" },
    { "id": 2, "first_name": "Lonee", "last_name": "Radley", "email": "lradley1@cyberchimps.com", "gender": "Female", "address": "491 Meadow Vale Pass" },
    { "id": 3, "first_name": "Darrelle", "last_name": "Peery", "email": "dpeery2@pen.io", "gender": "Female", "address": "88 Springview Place" },
    { "id": 4, "first_name": "Irma", "last_name": "Linacre", "email": "ilinacre3@psu.edu", "gender": "Female", "address": "10 Garrison Court" },
    { "id": 5, "first_name": "Elene", "last_name": "Wilce", "email": "ewilce4@microsoft.com", "gender": "Female", "address": "664 Thackeray Pass" }
]

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

storiesOf('Table', module)
    .add('default', () => (
        <Table data={tableData} headers={headers}/>
    ))