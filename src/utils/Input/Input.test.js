import React from 'react'
import { shallow } from 'enzyme'
import Input from './Input'

describe('Input snapshot', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<Input />)
    expect(wrapper).toMatchSnapshot()
  })

})