const geoSchema = {
    required: ['lat', 'lng'],
    type: 'object',
    properties: {
        lat: {type: 'string'},
        lng: {type: 'string'}
    }
};

module.exports = {geoSchema};