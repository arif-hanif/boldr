/* @flow */
const babelJest = require('babel-jest');

module.exports = babelJest.createTransformer({
  presets: ['stage-2', ['env', { targets: { node: true } }], 'react'],
  plugins: [
    'transform-decorators-legacy',
    'syntax-dynamic-import',
    'dynamic-import-node',
    'dynamic-import-webpack',
    'transform-object-rest-spread',
  ],
});
