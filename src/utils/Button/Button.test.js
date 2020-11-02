import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'

describe('Button snapshot', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper).toMatchSnapshot()
  })

})