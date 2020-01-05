import React from 'react';
import { storiesOf } from '@storybook/react';
import WebOptimize from './WebOptimize';

const stories = storiesOf('SVGs', module)

stories.add('WebOptimize svg', () => {
    return <WebOptimize />
})