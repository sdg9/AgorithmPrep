const {defaults} = require('jest-config');
module.exports = {
  // ...
  // moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
	testMatch: ["**/__tests__/**/*.ts"]
  // ...
};