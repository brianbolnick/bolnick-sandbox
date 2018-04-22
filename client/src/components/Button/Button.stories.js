import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import { MemoryRouter } from 'react-router'

storiesOf('Button', module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    ))
    .add('primary', () => (
        <Button primary >Primary Button</Button>
    ))
    .add('default', () => (
        <Button>Default Button</Button>
    ))
    .add('disabled', () => (
        <Button disabled>Disabled Button</Button>
    ))