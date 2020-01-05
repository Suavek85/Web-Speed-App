import React from 'react';
import { storiesOf } from '@storybook/react';
import InputCard from './InputCard';

const stories = storiesOf('UI Components', module)

stories.add('Input Card', () => {
    return <InputCard />
})

