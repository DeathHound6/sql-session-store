import { Database } from "./Database";
import { Connection, createConnection } from "mariadb";

export class MySQLDatabase extends Database {
    connection: Connection;

    public async connect() {
        this.connection = await createConnection({
            database: this.database,
            user: this.username,
            password: this.password,
            port: this.port,
            host: this.host
        });
    }

    public async updateOne(): Promise<void> {}

    public async deleteOne(): Promise<void> {}

    private async getAll(): Promise<any[]> {
        return [];
    }

    public async pruneExpired(): Promise<void> {
        const records = await this.getAll();
    }
}