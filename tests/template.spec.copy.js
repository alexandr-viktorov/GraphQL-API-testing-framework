/* eslint-disable prefer-arrow-callback */
/* eslint-disable space-before-function-paren */
/* eslint-disable spaced-comment */
/* eslint-disable func-names */
/* eslint-disable no-undef */
const { spec } = require('pactum');

describe('Describe a test case', () => {
  //  Mandatory for proper report generation,
  //  do not convert prepareReportBeforeEach() to arrow function,
  //  _spec must be in the upper scope (describe()),
  //  prepareReportBeforeEach() must be called before each it()
  let _spec = spec();

  function prepareReportBeforeEach() {
    // eslint-disable-next-line func-names
    beforeEach(function () {
      _spec = spec();
      _spec.records('mocha', this);
    });
  }

  prepareReportBeforeEach();

  before(() => {
    //  before function
  });

  afterEach(() => {

  });

  after(() => {

  });

  it('Step description', async () => {

  });

  it('Step description', () => {

  });

  context('Complex step description', () => {
    prepareReportBeforeEach();

    it('Step description', async () => {

    });

    it('Step description', () => {

    });
  });
});
