import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
  ],
  maxWorkers: 2,
  moduleDirectories: ['node_modules', '<rootDir>'],

  workerIdleMemoryLimit: '2GB',
  forceExit: true,
  clearMocks: true,
  logHeapUsage: true,
  collectCoverage: true,
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 88,
      functions: 90,
      lines: 90,
    },
  },
  coverageReporters: [
    'html',
    ['text', { file: '../coverage.txt', maxCols: 120 }],
    'text',
    'text-summary',
  ],
  testEnvironment: './FixJSDOMEnvironment.ts',
};

export default config;
