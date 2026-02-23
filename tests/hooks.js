const addContext = require('mochawesome/addContext');
const { request, settings, reporter } = require('pactum');

const awesome_reporter = {
  afterSpec(spec) {
    const mocha_context = spec.recorded.mocha;
    if (spec.status === 'FAILED') {
      addContext(mocha_context, {
        title: 'Request',
        value: spec.request,
      });
      addContext(mocha_context, {
        title: 'Response',
        value: spec.response,
      });
    }
  },
};

exports.mochaHooks = {
  beforeAll(done) {
    request.setBaseUrl(process.env.BASE_URL);
    request.setDefaultHeaders({ 'Content-Type': 'application/json' });
    request.setDefaultTimeout(20000);
    settings.setLogLevel(('TRACE'));
    reporter.add(awesome_reporter);
    done();
  },
};
