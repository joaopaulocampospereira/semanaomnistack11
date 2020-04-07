const crypto = require('crypto');

module.exports = function generateUiniqueId() {
    return crypto.randomBytes(4).toString('HEX');
}