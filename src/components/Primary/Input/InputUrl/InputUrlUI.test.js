import React from 'react'
import { shallow } from 'enzyme'
import InputButtonUrlUI from './InputUrlUI'

describe('InputButtonUrlUI snapshot', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<InputButtonUrlUI />)
    expect(wrapper).toMatchSnapshot()
  })

})