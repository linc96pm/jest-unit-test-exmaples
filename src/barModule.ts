import { foo } from "./fooModule"

export function bar (value: any) {
  console.log('This is bar, calling foo')
  return foo(value)
}