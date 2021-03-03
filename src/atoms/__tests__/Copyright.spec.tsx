import renderer from 'react-test-renderer'
import Copyright from '../Copyright'

Date.now = jest.fn(() => 1482363367071)

it('Snapshot test for Copyright', () => {
  const tree = renderer.create(<Copyright />).toJSON()
  expect(tree).toMatchSnapshot()
})
