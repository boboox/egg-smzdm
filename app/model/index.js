const response = require('./response.js');
const mysql = require('./orm/mysql');
const smzdm = require('./orm/smzdm');
module.exports = {
    response,
    orm: {
        mysql,
        smzdm
    }
}
