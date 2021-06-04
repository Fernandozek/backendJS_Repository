import knex from 'knex';
import path from 'path';

const filename = path.join(path.resolve(), "database/agenda.sqlite");

const database = knex({
    client: "sqlite3",
    connection: {
        filename,
    },
    useNullAsDefault: true
});

export default database;