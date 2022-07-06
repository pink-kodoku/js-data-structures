const {defaults} = require('jest-config');
module.exports = {
    rootDir: './src',
    preset: "ts-jest",
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
};