'use strict';
/**
 * Created by Prance on 1/25/2016.
 */
var koa = require('koa');
var app = koa();
var achievements = require('./controllers/achievements.controller.js');

achievements.getAllAchievements();

app.use(function *() {
    achievements.getAllAchievements();
});

app.listen(3000);
