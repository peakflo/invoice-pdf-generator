/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  // A preset that is used as a base for Jest's configuration
  // preset: 'ts-jest',
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.ts?$": "ts-jest",
  },

  // The test environment that will be used for testing
  testEnvironment: "node",

  transformIgnorePatterns: [
    "__tests__/main.test.js",
    "main.test.js",
    "__tests__/rfq.test.js",
    "/node_modules/",
  ],

  // Run tests from one or more projects
  // projects: ['<rootDir>/src/'],

  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFiles: ["<rootDir>/jest.env.js"],

  // The glob patterns Jest uses to detect test files
  testMatch: ["**/__tests__/**/*.ts", "**/?(*.)+(spec|test).ts"],

  // Indicates whether each individual test should be reported during the run
  // verbose: true,
};
