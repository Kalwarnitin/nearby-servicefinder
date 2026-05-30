const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "172.31.46.222",
  database: "nearby_services",
  password: "Nitin@2004",
  port: 5432,
});

module.exports = pool;
