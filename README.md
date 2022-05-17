# SQL Session Store
## Middleware to handle sessions for wesbervers using SQL databases
### Install
```bash
npm install sql-session-store
```
### Usage
```js
var app = require('express')();
var session = require('express-session');
var store = require('sql-session-store')(session);

app.use(session({
        store: new store({
            client: 'mysql',
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: 'super_secret_password',
            database: 'sessions'
        })
    })
);
```