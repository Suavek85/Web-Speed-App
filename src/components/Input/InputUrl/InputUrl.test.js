import React from 'react'
import { shallow } from 'enzyme'
import InputUrl from './InputUrl'

it('Should match the snapshot', () => {
  const wrapper = shallow(<InputUrl />)
  expect(wrapper).toMatchSnapshot()
})