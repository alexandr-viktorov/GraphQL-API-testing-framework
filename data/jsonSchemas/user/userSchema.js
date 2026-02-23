const {addressSchema} = require('./address/addressSchema');
const userSchema = (address = addressSchema) => ({
    required: ['id'],
    type: 'object', 
    properties: {   
        id:{type: 'string'},
        name: { type: 'string'},
        email: { type: 'string'},
        address: address
    }
});

module.exports = {userSchema};