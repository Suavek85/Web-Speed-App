import * as React from 'react'
import * as redux from 'react-redux'
import { shallow } from 'enzyme'
import Error from './Error'

describe('Error snapshot', () => {

  it('should match the snapshot', () => {
    const errorMessageStatus = 500
    const spy = jest.spyOn(redux, 'useSelector')
    spy.mockReturnValue(errorMessageStatus)
    const wrapper = shallow(<Error />)
    expect(wrapper).toMatchSnapshot()
  })

})

describe('Error rendering', () => {

  it('should not render error if error status is null', () => {
    const errorMessageStatus = null
    const spy = jest.spyOn(redux, 'useSelector')
    spy.mockReturnValue(errorMessageStatus)
    const wrapper = shallow(<Error />)
    expect(wrapper.find('div').exists()).toBeFalsy()
  })

  it('should render error if error status is defined', () => {
    const errorMessageStatus = 500
    const spy = jest.spyOn(redux, 'useSelector')
    spy.mockReturnValue(errorMessageStatus)
    const wrapper = shallow(<Error />)
    expect(wrapper.find('div').exists()).toBeTruthy()
  })

});