import React from 'react';
import { storiesOf } from '@storybook/react';
// import { withKnobs, select } from "@storybook/addon-knobs";
import Button from './atoms/Button/Button';

storiesOf('Button', module)
  .add('Note', () => <Button note>Click me</Button>)
  .add('Twitter', () => <Button twitter>Click me</Button>)
  .add('Article', () => <Button article>Click me</Button>)
  .add('Login', () => <Button primary>Login</Button>)
  .add('Small', () => <Button>Cancel</Button>);
