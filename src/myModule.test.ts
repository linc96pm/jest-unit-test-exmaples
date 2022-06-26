import * as myModule from './myModule'

describe('myModule', () => {
  test('#1 Approach call myModule.foo', () => {
    const fooSpy = jest.spyOn(myModule.default, 'foo')

    myModule.default.bar();

    expect(fooSpy).toHaveBeenCalledTimes(1)
  })
})