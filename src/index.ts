import * as Session from "express-session";
import { Store } from "./stores/store";

export function middleware(session: any) {
    const store: Session.Store = session.Store;
    return Store;
}