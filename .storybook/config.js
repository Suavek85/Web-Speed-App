import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { style } from './globalStyle';

addDecorator(Story => (
  <div style={style}>
      <Story />
  </div>
));

configure(require.context('../src', true, /\.stories\.js$/), module);