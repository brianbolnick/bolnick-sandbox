import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Modal from './Modal';
import Button from '../Button/Button'
import styled from 'styled-components'
import { scaleUp } from '../Keyframes/Keyframes'

const Content = styled.div`
  background: white;
  width: 100%;
  height: 100%;
  padding: 50px;
  border-radius: 3px; 
  font-weight: 300;
  text-align: center;
`



storiesOf('Modal', module)
  .add('default', () => (
    <Modal target={
      <Button> Open Modal </Button>
    }>
      <Content> hello </Content>
    </Modal>
  ))