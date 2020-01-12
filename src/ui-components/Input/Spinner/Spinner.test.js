import React from 'react'
import { shallow } from 'enzyme'
import Spinner from './Spinner'

it('Should match the snapshot', () => {
  const wrapper = shallow(<Spinner />).debug()
  expect(wrapper).toMatchSnapshot()
})