'use strict';
/**
 * Created by Prance on 1/25/2016.
 */
var koa = require('koa');
var app = koa();

app.use(function *() {
    this.body = 'Hello World!';
});

app.listen(3000);
