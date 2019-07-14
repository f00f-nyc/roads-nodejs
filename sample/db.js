const { Pool } = require('pg')
var pool = 'uninitialized';

module.exports.init = function(app) {
    pool = new Pool({
      user: process.env.DATABASE_USER,
      host: 'localhost',
      database: process.env.DATABASE_NAME,
      password: process.env.DATABASE_PASS,
      port: 5432,
    }));
    app.set('db', pool);
}

module.exports.pool = pool;