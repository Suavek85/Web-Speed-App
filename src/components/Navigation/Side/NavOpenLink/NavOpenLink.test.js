import * as React from 'react'
import { shallow } from 'enzyme'
import * as redux from 'react-redux'
import NavOpenLink from './NavOpenLink'

it('should match the snapshot', () => {
  const mockDispatch = jest.fn()
  const spyUseDispatch = jest.spyOn(redux, 'useDispatch')
  spyUseDispatch.mockReturnValue(mockDispatch)
  const wrapper = shallow(<NavOpenLink />)
  expect(wrapper).toMatchSnapshot()
})

it('should dispatch action on click', () => {
  const mockDispatch = jest.fn()
  const spyUseDispatch = jest.spyOn(redux, 'useDispatch')
  spyUseDispatch.mockReturnValue(mockDispatch)
  const wrapper = shallow(<NavOpenLink />)
  const button = wrapper.find('#buttonwrapper')
  button.simulate('click')
  expect(mockDispatch).toHaveBeenCalledTimes(1)
})