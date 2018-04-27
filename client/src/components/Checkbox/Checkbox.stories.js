import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from './Checkbox';
import '../../css/App.css'


storiesOf('Checkbox', module)
    .add('default', () => (
        <Checkbox onChange={() => console.log("changed") }/>
    ))