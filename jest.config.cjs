module.exports = {
  testEnvironment: 'node',
  coverageReporters: ['lcov', 'text'],
  collectCoverage: true,
  collectCoverageFrom: ['**/*.js'],
  coveragePathIgnorePatterns: ['/node_modules/', '/src/.internal/'],
};
