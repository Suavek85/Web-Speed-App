import React from 'react'
import { shallow } from 'enzyme'
import SignWithGoogle from './SignWithGoogle'

describe('SignWithGoogle snapshot', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<SignWithGoogle />)
    expect(wrapper).toMatchSnapshot()
  })

})