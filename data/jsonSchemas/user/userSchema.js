const {addressSchema} = require('./address/addressSchema');
const userSchema = (address = addressSchema) => ({
    required: ['id', 'name', 'email', 'address'],
    type: 'object', 
    properties: {   
        id:{type: 'string'},
        name: { type: 'string'},
        email: { type: 'string'},
        address: address
    }
});

module.exports = {userSchema};