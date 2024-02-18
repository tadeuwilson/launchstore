const { Pool } = require('pg');

module.exports = new Pool({
  user: 'postgres',
  password: 'password',
  host: 'database-1.cfsausgm8chc.us-east-2.rds.amazonaws.com',
  port: 5432,
  database: 'launchstore'
});
