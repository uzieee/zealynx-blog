const { Connection } = require("pg");

module.exports = ({env}) => ({
    connection: {
        client : 'postgres',
        connection: {
            host: env('PGHOST','127.0.0.1'),
            port: env.int('PGPORT',5432),
            database: env('PGDATABASE','strapi'),
            user: env('PGUSER','postgres'),
            password: env('PGPASSWORD','your-password'),
            ssl: env.bool(true),
        },
        pool: {min: 0}
    },
});