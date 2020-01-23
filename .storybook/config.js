import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from '../src/reducers';
import { style } from './globalStyle';

const store = createStore(reducer);

addDecorator(Story => (
  <div style={style}>
    <Provider store={store}>
      <Story />
    </Provider>
  </div>
));

configure(require.context('../src', true, /\.stories\.js$/), module);