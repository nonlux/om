// ts
//https://github.com/swc-project/jest/issues/62

const fs = require('node:fs');

const config = JSON.parse(fs.readFileSync(`${__dirname}/.swcrc`, 'utf-8'));
config.exclude = [
  'foo',
  //'**/node_modules'
];

/* eslint-disable */
export default {
  displayName: '@nonlux/fetcher',
  preset: '../../jest.preset.js',
  testEnvironment: 'node',
  // fix pnpm jest
  transformIgnorePatterns: ['/node_modules/!(.pnpm)'],
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

//"exclude": ["jest.config.ts",".*\\.spec.tsx?$",".*\\.test.tsx?$","./src/jest-setup.ts$","./**/jest-setup.ts$",".*.js$"]
