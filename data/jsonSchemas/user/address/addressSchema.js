const {geoSchema} = require('./geoSchema');
const addressSchema = (geo = geoSchema) => ({
    required: ['geo'],
    type: 'object',
    properties: {
        geo: geo
    }
});

module.exports = {addressSchema};