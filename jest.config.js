module.exports = {
  resolver: require.resolve(`jest-pnp-resolver`),
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}'
  ],
  coverageDirectory: 'target/coverage',
  coverageReporters: [
    'cobertura',
    'lcov',
    'text',
    'text-summary'
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  modulePaths: [
    '<rootDir>/src/'
  ],
  preset: 'ts-jest/presets/js-with-babel',
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.ts?(x)',
    '<rootDir>/src/**/*.(spec|test).ts?(x)'
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  verbose: true
}
