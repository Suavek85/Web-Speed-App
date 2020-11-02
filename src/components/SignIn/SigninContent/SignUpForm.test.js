import React from 'react'
import { shallow } from 'enzyme'
import SignUpForm from './SignUpForm'

describe('SignUpForm snapshot', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<SignUpForm />)
    expect(wrapper).toMatchSnapshot()
  })

})