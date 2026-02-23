const _ = require('lodash');
const {
  spec,
  handler,
} = require('pactum');
const { expect } = require('chai');
const { userSchema } = require('../../data/jsonSchemas/user/userSchema');   
const { requestQuery } = require('../../helpers/common');
const { userQuery, userFieldsWithAddress } = require('../../helpers/requests/reuestMods');

describe('Get user details', () => {
    it('should get user details successfully', async () => {
        await pactum.spec();

        function prepareReportBeforeEach() {
            // eslint-disable-next-line func-names
            beforeEach(function () {
            _spec = spec();
            _spec.records('mocha', this);
            });
        }

        handler.addSpecHandler('user', (ctx) => {
        // eslint-disable-next-line no-shadow
            const { spec, data } = ctx;
            spec.post('/');
            spec.withBody(data);
            spec.expectStatus(200);
        });


        prepareReportBeforeEach();
        
        before(() => {
        //  before function
        });

        afterEach(() => {

        });

        after(() => {

        });

        it('Get user details', async () => {
            result = await _spec.use('user', requestQuery('user', userFieldsWithAddress, { id: '1' }) ).toss();
            expect(result.json).to.be.jsonSchema(userSchema());
            expect(result.json.id).to.equal('1');
            expect(result.json.name).to.equal('Bret');
            expect(result.json.email).to.equal('Sincere@april.biz');
        });

    });
});