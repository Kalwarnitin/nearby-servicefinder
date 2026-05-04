const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "nearby_services",
  password: "Nitin@2004",
  port: 5433,
});

module.exports = pool;