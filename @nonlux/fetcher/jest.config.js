Object.defineProperty(exports, '__esModule', { value: true });

//https://github.com/swc-project/jest/issues/62

const fs = require('node:fs');

const config = JSON.parse(fs.readFileSync(`${__dirname}/.swcrc`, 'utf-8'));
config.exclude = [];

/* eslint-disable */
exports.default = {
  displayName: '@nonlux/fetcher',
  preset: '../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': [
      '@swc/jest',
      {
        ...config,
        swcrc: false,
      },
    ],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/@nonlux/fetcher',
};
