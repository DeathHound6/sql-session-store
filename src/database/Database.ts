import { MySQLDatabase } from "./MySQLClient";

export interface DatabaseConnectionOptions {
    /**
     * The database client. E.g: MySQL/MariaDB,PostgreSQL
     */
    client: string,
    /**
     * The domain name or IP address to use as the host
     */
    host: string,
    /**
     * The number of the database port
     */
    port: number,
    /**
     * The user to login as
     */
    username: string,
    /**
     * The password of the specified user
     */
    password: string,
    /**
     * The name of the database to store session data in
     */
    database: string
}

export interface SessionData {}

export abstract class Database implements DatabaseConnectionOptions {
    client: string;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    connection: any;

    constructor(config: DatabaseConnectionOptions) {
        this.client = config.client.toLowerCase();
        this.host = config.host;
        this.port = config.port;
        this.username = config.username;
        this.password = config.password;
        this.database = config.database;
        this.connect();
    }

    public async connect() {}

    public async pruneExpired() {}

    public async updateOne(sessid: string, newData: SessionData) {}

    public async deleteOne(sessid: string) {}

    public static getDB(config: DatabaseConnectionOptions): Database {
        if (config.client.toLowerCase() == "mysql" || config.client.toLowerCase() == "mariadb") {
            return new MySQLDatabase(config);
        }
    }
}