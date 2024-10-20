import 'jest-preset-angular/setup-jest';
import 'jest-localstorage-mock';
import 'jest-canvas-mock';
import { ngMocks } from 'ng-mocks';
import { TextDecoder, TextEncoder } from 'util';

ngMocks.autoSpy('jest');

// @ts-ignore
global.TextEncoder = TextEncoder;
// @ts-ignore
global.TextDecoder = TextDecoder;


global.console = {
  ...console,
  // uncomment to ignore a specific log level
  log: jest.fn(),
  debug: jest.fn(),
  info: jest.fn(),
  // warn: jest.fn(),
  // error: jest.fn(),
};