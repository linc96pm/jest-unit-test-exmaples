import * as index from './index'

describe('index', () => {
  test('it should have exports', () => {
    expect(index).toBeDefined()
    expect(Object.keys(index).length).toBeGreaterThan(0)
  })
})
