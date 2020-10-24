import * as React from 'react'
import { shallow } from 'enzyme'
import * as redux from 'react-redux'
import InputButtonWrapper from './InputButtonWrapper'
import { appStates } from '../../../../constants/states'

it('should match the snapshot', () => {
  const mockDispatch = jest.fn()
  const spyUseDispatch = jest.spyOn(redux, 'useDispatch')
  spyUseDispatch.mockReturnValue(mockDispatch)
  const spyUseSelector = jest.spyOn(redux, 'useSelector')
  spyUseSelector.mockReturnValue(appStates.INACTIVE)
  const wrapper = shallow(<InputButtonWrapper />)
  expect(wrapper).toMatchSnapshot()
})

it('should pass handleGetReportClick', () => {
  const mockDispatch = jest.fn()
  const spyUseDispatch = jest.spyOn(redux, 'useDispatch')
  spyUseDispatch.mockReturnValue(mockDispatch)
  const spyUseSelector = jest.spyOn(redux, 'useSelector')
  spyUseSelector.mockReturnValue(appStates.INACTIVE)
  const wrapper = shallow(<InputButtonWrapper />)
  expect(wrapper.props().handleGetReportClick).toBeDefined()
})