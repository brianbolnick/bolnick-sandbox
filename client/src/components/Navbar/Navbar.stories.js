import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Navbar from './Navbar';
import { MemoryRouter } from 'react-router'
import Link  from '../Link/Link'

storiesOf('Navbar', module)
.addDecorator(story => (
  <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
))
  .add('default', () => (
    <Navbar>
      <Link dark to="#">Home</Link>
      <Link dark to="#">About</Link>
      <Link dark to="#">Contact</Link>
    </Navbar>
  ))