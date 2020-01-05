import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { style } from './globalStyle';

addDecorator(storyFn => <div style={style}>{storyFn()}</div>);
configure(require.context('../src', true, /\.stories\.js$/), module);
