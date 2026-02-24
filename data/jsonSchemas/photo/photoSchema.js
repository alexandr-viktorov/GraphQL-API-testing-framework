const { albumSchema } = require( './albumSchema.js');
const photoSchema = (album = albumSchema()) => ({
    required: ['id'],
    type: 'object',
    properties: {
        album: album
    }
}); 

module.exports = { photoSchema };