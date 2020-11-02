import React from 'react'
import { shallow } from 'enzyme'
import SigninForm from './SignInForm'

describe('SigninForm snapshot', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<SigninForm />)
    expect(wrapper).toMatchSnapshot()
  })

})