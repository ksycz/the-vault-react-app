import React from 'react';
import { storiesOf } from '@storybook/react';
import ButtonIcon from './atoms/ButtonIcon/ButtonIcon';
import editIcon from '../assets/icons/edit-solid.svg';
import plusIcon from '../assets/icons/plus-circle-solid.svg';
import bulbIcon from '../assets/icons/lightbulb-solid.svg';
import twitterIcon from '../assets/icons/twitter-brands.svg';
import logoutIcon from '../assets/icons/sign-out-alt-solid.svg';

storiesOf('Button Icon', module)
    .add('Plus', () => <ButtonIcon icon={plusIcon} />)
    .add('Edit', () => <ButtonIcon icon={editIcon} />)
    .add('Twitter', () => <ButtonIcon icon={twitterIcon} />)
    .add('Bulb', () => <ButtonIcon active icon={bulbIcon} />)
    .add('Log out', () => <ButtonIcon icon={logoutIcon} />);