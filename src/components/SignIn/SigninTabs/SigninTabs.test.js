import React from 'react'
import { shallow } from 'enzyme'
import SignInTabs from './SigninTabs'

describe('SignInTabs snapshot', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<SignInTabs />)
    expect(wrapper).toMatchSnapshot()
  })

})