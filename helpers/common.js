const { query, mutation, subscription } = require('gql-query-builder');
const Web3 = require('web3');
const { spec } = require('pactum');

/**
 * @description Prepare a GraphQL query body basing on params
 * @param {String} operation Operation name
 * @param {Array.<String>} fields Array with params in query
 * @param {Object} variables Variables, where key is a variable name
 */
const requestQuery = (operation, fields, variables = {}) => query({
  operation,
  fields,
  variables: { ...variables },
});

/**
 * @description Prepare a GraphQL mutation body basing on params
 * @param {String} operation Operation name
 * @param {Array.<String>} fields Array with params in query
 * @param {Object} variables Variables, where key is a variable name
 * @returns 
 */
const requestMutation = (operation, fields, variables = {}) => mutation({
  operation,
  fields,
  variables: { ...variables },
});

/****
 * @description Prepare a GraphQL subscription body basing on params
 * @param {String} operation Operation name 
 * @param {Array.<String>} fields Array with params in query
 * @param {Object} variables Variables, where key is a variable name
 * @returns 
 */
const requestSubscription = (operation, fields, variables = {}) => subscription({
  operation,
  fields,
  variables: { ...variables },
});

/**
 * @description Prepare a modified response model in JSON Schema format basing
 * on array of parameters send in request, use with .expectJsonSchema
 * @param {Array.<String>} queryParams Array of parameters send in request query
 * @param {Object} responseModel Default response model in JSON Schema format
 */
const prepareCustomResponseSchema = (queryParams, responseModel) => {  
    const respModel = responseModel;
    respModel.properties = Object.keys(responseModel.properties).
    filter((key) => queryParams.includes(key)).
    reduce((acc, key) => {
        if (queryParams.includes(key)) {
            acc[key] = responseModel.properties[key];
        }
        return acc;
    }, {});
    respModel.required = respModel.required.filter((key) => queryParams.includes(key));
    return respModel;
};

/**
 * @description Get fields from JSON Schema format basing on array of parameters send in request, use with .expectJsonSchema    
 * @param {Object} schema 
 * @param {Array.<String>} excludeFields 
 * @returns 
 */
const getFieldsFromSchema = (schema, excludeFields) => Object.keys(schema.properties).filter((key) => !excludeFields.includes(key));

/**
 * @description Combine fields from different schemas, use with .expectJsonSchema
 * @param {Array.<String>} fields 
 * @param {Object} obj 
 * @returns 
 */
const combineFieldsFromSchemas = (fields, obj) => {
    let data = fields;
    Object.keys(obj).forEach((key) => {
        data = data.map((field) => (field === key ? {[key]: obj[key]} : field));  
    });
    return data;
};


module.exports = {
    requestQuery,
    requestMutation,
    requestSubscription,
    prepareCustomResponseSchema,
    getFieldsFromSchema,
    combineFieldsFromSchemas,
};

