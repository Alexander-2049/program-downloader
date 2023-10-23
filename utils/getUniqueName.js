const uuid = require('uuid');

function getUniqueName() {
    return uuid.v4();
}

module.exports = getUniqueName;