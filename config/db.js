
module.exports = {
    mysql: {
        client: env('DB_CLIENT', 'mysql2'),
        host: env('DB_HOST', '127.0.0.1'),
        user: env('DB_USER', 'root'),
        password: env('DB_PASSWORD', 'azuratech1234'),
        database: env('DB_DATABASE', 'proscrim'),
        pool: {
            min: 20,
            max: 100
        }
    }
};
