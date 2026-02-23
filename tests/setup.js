const chai = require('chai');
const chaiJsonSchema = require('chai-json-schema');
const { request } = require('pactum');

chai.use(chaiJsonSchema);
request.setBaseUrl(process.env.BASE_URL);
