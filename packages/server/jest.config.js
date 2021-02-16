const { name } = require('./package.json')

module.exports = {
  displayName: name,
  name,
  // preset: '@shelf/jest-mongodb',
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/**"],
  coverageDirectory: "__test__/coverage",
  coveragePathIgnorePatterns: [
    "\\\\node_modules\\\\",
    "./src/index",
    "./src/models"
  ],
  testEnvironment: 'node'
}