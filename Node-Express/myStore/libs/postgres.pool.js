const {Pool} = require('pg');

async function  getConection (){
  const pool = new Pool ({
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
