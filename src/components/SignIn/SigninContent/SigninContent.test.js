import React from 'react'
import { shallow } from 'enzyme'
import SignInContent from './SigninContent'

describe('SignInContent snapshot', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<SignInContent />)
    expect(wrapper).toMatchSnapshot()
  })

})