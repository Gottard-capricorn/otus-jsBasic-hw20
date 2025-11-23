/** @type {import('jest').Config} */
export default {
  clearMocks: true,

  collectCoverage: true,

  coverageDirectory: "coverage",

  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },

  coverageProvider: "babel",

  testEnvironment: "jsdom",

  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
};