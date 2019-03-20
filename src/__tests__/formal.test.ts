import formal from '../formal'
import useFormal from '../use-formal'

// @TODO: add tests for useFormal once this is
// resolved: https://github.com/mpeyper/react-hooks-testing-library/issues/14

test('should default export useFormal', () => {
  expect(formal).toBe(useFormal)
})
