import { Database } from "../database/Database";

export interface StoreOptions {
    store: Database,
    checkPeriod: number
}

export class Store implements StoreOptions {
    store: Database;
    checkPeriod: number;
    private checkInterval: NodeJS.Timer | null;

    constructor(options: StoreOptions) {
        this.store = options.store;
        this.checkPeriod = options.checkPeriod;
        this.checkInterval = null;
        this.startIntervalCheck();
    }

    public destroySession(sessid: string) {
        this.store.deleteOne(sessid);
    }

    private startIntervalCheck() {
        const self = this;
        clearInterval(this.checkInterval);
        this.checkInterval = setInterval(function() {
            self.store.pruneExpired();
        }, Math.floor(this.checkPeriod)).unref();
    }
}