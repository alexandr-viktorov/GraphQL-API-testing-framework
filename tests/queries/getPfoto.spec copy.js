const _ = require('lodash');
const {
  spec,
  handler,
} = require('pactum');
const { expect } = require('chai');
const { photoSchema } = require('../../data/jsonSchemas/photo/photoSchema');
const { requestQuery } = require('../../helpers/common');
const { userQuery, photoFields} = require('../../helpers/requests/requestMods');

describe('Get user details', () => {
    let _spec;

    before(() => {
        handler.addSpecHandler('photo', (ctx) => {
            // eslint-disable-next-line no-shadow
            const { spec, data } = ctx;
            spec.post('/api');
            spec.withBody(data);
            spec.expectStatus(200);
        });
    });

    // eslint-disable-next-line func-names
    beforeEach(function () {
        _spec = spec();
        _spec.records('mocha', this);
    });

    afterEach(() => {});

    after(() => {});

    it('Get photo details', async () => {
        const result = await _spec.use('photo', requestQuery('photo', photoFields, { id: { value: '1', type: 'ID', required: true } })).toss();
        const photo = result.json.data.photo;
        expect(photo).to.be.jsonSchema(photoSchema());
        expect(photo.id).to.equal('1');
    });
});
