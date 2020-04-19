import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './atoms/Input/Input';

storiesOf('Input', module)
  .add('Login', () => <Input placeholder="Login"></Input>)
  .add('Standard', () => <Input placeholder="Search" search></Input>);