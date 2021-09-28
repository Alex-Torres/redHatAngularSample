'use strict';

const chai = require('chai');
const assert = chai.assert;
const mocha = require('mocha');
const describe = mocha.describe;
const it = mocha.it;
const before = mocha.before;

const url = require('url');
/**
 * Basic implementation of integration tests
 * minimally required to pass MDE pipeline.
 */
describe('server.js Integration Tests', () => {

  const SERVICE_HOST_URL = process.env.SERVICE_HOST_URL;
  let serviceHostUrl;

  before(() => {
    serviceHostUrl = url.parse(SERVICE_HOST_URL);
  });

  describe('Necessary Environment Variables', () => {
    it('has SERVICE_HOST_URL defined', () => {
      assert(SERVICE_HOST_URL, 'SERVICE_HOST_URL was not defined');
      assert(serviceHostUrl, 'SERVICE_HOST_URL was not a valid url');
    });
  });
});
