const pgp = require('pg-promise')();



// db config
const config = {
    host: 'localhost',
    port: 5432,
    database: 'BASEBALL_STATS',
    user: 'postgres',
    password: 'pwd',

};

const db = pgp(config);

module.exports = db;