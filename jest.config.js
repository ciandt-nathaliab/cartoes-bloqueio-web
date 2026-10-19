module.exports = {
  preset: 'jest-preset-angular',
  roots: ['<rootDir>/src'],
  modulePaths: ['<rootDir>/dist'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/app/$1',
    '@env/(.*)': '<rootDir>/src/environments/$1',
    '@core/(.*)': '<rootDir>/src/app/core/$1',
    '@services/(.*)': '<rootDir>/src/app/core/services/$1',
    '@mocks/(.*)': '<rootDir>/src/mocks/$1',
    '@shared/(.*)': '<rootDir>/src/app/shared/$1',
    '@modules/(.*)': '<rootDir>/src/app/modules/$1',
  },
  testMatch: ['**/src/**/*.spec.ts'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/src/environments',
    '<rootDir>/mocks/*',
    '<rootDir>/app/mocks/*',
    '<rootDir>/src/app/shared/models/*',
  ],
  modulePathIgnorePatterns: [
    '<rootDir>/projects/.*',
    '<rootDir>/node_modules/.*',
    '<rootDir>/mocks/*',
    '<rootDir>/src/app/shared/models/*',
  ],

  transform: {
    '^.+\\.(ts|js|mjs|html|svg)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
        diagnostics: {
          ignoreCodes: [151001]
        }
      },
    ],
  }
};
