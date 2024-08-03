"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
exports.default = {
    displayName: '@nonlux/fetcher',
    preset: '../../jest.preset.js',
    testEnvironment: 'node',
    transform: {
      '^.+\\.[tj]s$': ['@swc/jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
    },
    moduleFileExtensions: ['ts', 'js', 'html'],
    coverageDirectory: '../../coverage/@nonlux/fetcher',
};
