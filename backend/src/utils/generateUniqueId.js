const crypto = require('crypto'); //para gerar o id da ONG

module.exports = function generateUniqueId(){
    return crypto.randomBytes(4).toString('Hex');
}