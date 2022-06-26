function foo() {
  console.log('This is foo')
}

function bar () {
  console.log('This is bar, calling foo')
  exportFunctions.foo()
}

const exportFunctions = {
  foo,
  bar
}

export default exportFunctions