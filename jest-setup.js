import regeneratorRuntime from 'regenerator-runtime';
import '@testing-library/jest-dom';

module.exports = () => {
  global.testServer = require('./server/server');
};
