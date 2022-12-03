module.exports = {
  collectCoverage: false,
  collectCoverageFrom: ['**/*.{ts,tsx,js,jsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
};
// "jest": {
//   "globalSetup": "./jest-setup.js",
//   "globalTeardown": "./jest-teardown.js",
//   "testEnvironment": "jest-environment-jsdom",
  // "setupFilesAfterEnv": [
  //   "@testing-library/jest-dom/extend-expect"
//   ]
// },