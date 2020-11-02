import React from 'react'
import * as redux from 'react-redux'
import { shallow } from 'enzyme'
import SigninPage from './SigninPage'

describe('SigninPage snapshot', () => {

  it('should match the snapshot', () => {
    const spyUseDispatch = jest.spyOn(redux, 'useDispatch')
    spyUseDispatch.mockReturnValue('NOANIMATION')
    const wrapper = shallow(<SigninPage />)
    expect(wrapper).toMatchSnapshot()
  })

})