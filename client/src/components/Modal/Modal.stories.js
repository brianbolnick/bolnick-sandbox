import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Modal from './Modal';
import Button from '../Button/Button'

storiesOf('Modal', module)
  .add('default', () => (
    <Modal target={
        <Button> Open Modal </Button>
    }>
      Testing!
    </Modal>
  ))