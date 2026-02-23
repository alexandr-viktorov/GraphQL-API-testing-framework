
const {
  prepareCustomResponseSchema,
  getFieldsFromSchema,
  combineFields,
} = require('../common');

const { userSchema } = require('../../data/jsonSchemas/user/userSchema');
const { addressSchema } = require('../../data/jsonSchemas/user/address/addressSchema');
const { geoSchema } = require('../../data/jsonSchemas/user/address/geoSchema');

const geoFields = getFieldsFromSchema(geoSchema);
const addressFields = getFieldsFromSchema(addressSchema(geoFields));
const addressFieldsWithGeo = combineFields(addressFields, { geo: geoFields });
const userFields = getFieldsFromSchema(userSchema(addressFields));
const userFieldsWithAddress = combineFields(userFields, { address: addressFieldsWithGeo }); 

/**
 * @description Prepare a query for user details with nested transactions, use with .expectJsonSchema
 * @param {String} type 
 * @param {Object} nestedVars 
 * @returns 
 */
const userQuery = (type, nestedVars)  => query([{
  operation: 'user',
  fields: [
    'id',
    {
      fields: userFieldsWithAddress,
      variables: {
        type: { value: type, required: true },
        ...nestedVars,
      },
    },
  ],
  variables: {
  },
}]);

module.exports = {
  userQuery,
  geoFields,
  addressFields,
  addressFieldsWithGeo,
  userFields,
  userFieldsWithAddress,
};