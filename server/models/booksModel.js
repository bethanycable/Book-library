const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5433,
  user: 'postgres',
  password: 'rootUser',
  database: 'postgres',
});

pool.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ', err);
    process.exit(1);
  }

  console.log('Connected to the database');
});

// const { Client } = require('pg');

// const client = new Client({
//   host: 'localhost',
//   port: 5433,
//   user: 'postgres',
//   password: 'rootUser',
//   database: 'postgres',
// });

// client.connect((err) => {
//   if (err) {
//     console.error('Error connecting to the database: ', err);
//     process.exit(1);
//   }

//   console.log('Connected to the database');
// });

// client.query('SELECT * FROM books', (err, res) => {
//   if (err) {
//     console.error('Error running query: ', err);
//     process.exit(1);
//   }

//   console.log(res.rows);
//   client.end();
// });

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
