import mysql2 from "mysql2";

module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: "127.0.0.1",
      port: 3306,
      user: "test-user",
      password: "password",
      database: "films_app_db",
      charset: "utf8",
    },
  },
  staging: {},
  production: {},
};
