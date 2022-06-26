const isSafeIntegerMock = jest.fn()


jest.mock('./isInteger.ts', () => ({
  isSafeInteger: isSafeIntegerMock
}))

import { isAtleast18 } from "./isAtLeast18"

beforeEach(() => {
  isSafeIntegerMock.mockClear()
})

describe('isAtleast18', () => {
  it('fails if value is not recognised as integer', () => {

    isSafeIntegerMock.mockImplementation(() => false)

    expect(isAtleast18(123)).toBe(false)
    expect(isAtleast18('abc')).toBe(false)
    expect(isSafeIntegerMock).toHaveBeenCalledWith(123)
    expect(isSafeIntegerMock).toHaveBeenCalledTimes(2)
  })

  it('passes if value is recognized as integer and is at least 18', () => {
    isSafeIntegerMock.mockImplementation(() => true)

    expect(isAtleast18(123)).toBe(true)
    expect(isAtleast18('abc')).toBe(false)
    expect(isSafeIntegerMock).toHaveBeenCalledWith(123)
    expect(isSafeIntegerMock).toHaveBeenCalledTimes(2)
  })
})
