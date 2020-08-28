import React from 'react'
import { shallow } from 'enzyme'
import { appStates } from '../../../../constants/states'
import InputButtonUI from './InputButtonUI'

describe('InputButtonUI snapshot', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<InputButtonUI />)
    expect(wrapper).toMatchSnapshot()
  })

})

describe('InputButtonUI rendering', () => {

  it('should add classes for different states', () => {
    const props = { getAppState: appStates.LOADING}
    const wrapper = shallow(<InputButtonUI {...props} />)
    expect(wrapper.find('button.blockLoading').exists()).toBeTruthy()
  })

})