module.exports = {
  testEnvironment: 'node',
  coverageReporters: ['lcov', 'text'],
  collectCoverage: true,
  collectCoverageFrom: ['src/*.js'],
  coveragePathIgnorePatterns: ['/node_modules/', '/src/.internal/'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};
