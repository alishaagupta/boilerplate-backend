'use strict';

const Router = require('koa-router');

module.exports = function(app){

    require('./routes/users')(app, Router) ;
};
