const fooMock = jest.fn()

jest.mock('./fooModule.ts', () => ({
  foo: fooMock
}))
// import * as fooModule from "./fooModule";
import { bar } from "./barModule";

describe("barModule", () => {
  test("bar calls foo", () => {
    // const fooMock = jest.spyOn(fooModule, "foo").mockImplementation(() => console.log('Hello World'));
    fooMock.mockReturnValue(42)
    const result = bar(42);

    expect(result).toBe(42)
    expect(fooMock).toHaveBeenCalledWith(42)
    expect(fooMock).toHaveBeenCalledTimes(1);
  });
});
