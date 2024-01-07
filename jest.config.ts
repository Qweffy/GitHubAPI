/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native(-.*)?|@react-native(-community)?|i18n-js|react-navigation|@react-navigation/.*|@react-native-picker|victory(-.*))/)',
  ],
  testPathIgnorePatterns: ['./__tests__/*', './node_modules/', './src/models/*', './src/assets/*', './src/styles/*'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '\\.types\\.ts$',
    '\\.styles\\.ts$',
    './src/models/*',
    './src/assets/*',
    './src/styles/*',
  ],
  testEnvironment: 'node',
  coverageProvider: 'v8',
}
