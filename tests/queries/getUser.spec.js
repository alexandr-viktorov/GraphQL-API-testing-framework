const _ = require('lodash');
const {
  spec,
  handler,
} = require('pactum');
const { expect } = require('chai');
const { userSchema } = require('../../data/jsonSchemas/user/userSchema');
const { requestQuery } = require('../../helpers/common');
const { userQuery, userFieldsWithAddress } = require('../../helpers/requests/requestMods');

describe('Get user details', () => {
    let _spec;

    before(() => {
        handler.addSpecHandler('user', (ctx) => {
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

    it('Get user details', async () => {
        const result = await _spec.use('user', requestQuery('user', userFieldsWithAddress, { id: { value: '1', type: 'ID', required: true } })).toss();
        const user = result.json.data.user;
        expect(user).to.be.jsonSchema(userSchema());
        expect(user.id).to.equal('1');
        expect(user.name).to.equal('Leanne Graham');
        expect(user.email).to.equal('Sincere@april.biz');
    });
});
