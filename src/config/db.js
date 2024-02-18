const { Pool } = require('pg');

module.exports = new Pool({
  user: 'postgres',
  password: 'password',
  host: 'postgres',
  port: 5432,
  database: 'launchstore'
});
