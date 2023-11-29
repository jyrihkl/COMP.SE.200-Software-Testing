module.exports = {
  testEnvironment: 'node'
  extensionsToTreatAsEsm: ['.js'],,
  coverageReporters: ['lcov', 'text'],
  collectCoverage: true,
  collectCoverageFrom: ['**/*.js'],
  coveragePathIgnorePatterns: ['/node_modules/', '/src/.internal/'],
};
