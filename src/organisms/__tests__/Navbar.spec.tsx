import renderer from 'react-test-renderer'
import Navbar from '../Navbar'

jest.mock('../../molecules/DarkModeToggle', () => 'MockDarkModeToggle')
jest.mock('next/router', () => ({
  useRouter: jest.fn().mockImplementation(() => ({
    pathname: '/',
  })),
}))

it('Snapshot test for Navbar', () => {
  const tree = renderer.create(<Navbar />).toJSON()
  expect(tree).toMatchSnapshot()
})
