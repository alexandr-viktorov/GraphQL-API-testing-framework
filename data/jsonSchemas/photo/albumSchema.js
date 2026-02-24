const { userSchema } = require( "../user/userSchema");
const albumSchema = (user = userSchema) => ({
    required: ['id'],
    type: 'object',
    properties: {
        id: { type: 'string' },
        title: { type: 'string' },
        user: user
    }
});

module.exports = { albumSchema };