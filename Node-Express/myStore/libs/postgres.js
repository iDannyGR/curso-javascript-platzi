const {Client } = require('pg');

async function  getConection (){
  const client = new Client ({
    user: 'admin',
    host: 'localhost',
    database: 'my_store',
    password: 'admin123',
    port: 5432,
  })
 await client.connect();
 return client;
}

module.exports = getConection;
