'use strict';

const koa = require('koa');
const app = new koa();
const compress = require('koa-compress');
const koaBody = require('koa-better-body');
const fs = require('fs');
const path = require('path');
const validate = require('koa-validation');
const cors = require('koa-cors');
// const config = require('./config');

require('dotenv').config();



require('./bootstrap/errors');
require('./bootstrap/globals');



require('koa-qs')(app, 'extended');

require('koa-custom-statuses')(app, config.misc.statuses);

let Rules = require('koa-validation').Rules;
let Filters = require('koa-validation').Filters;


require('./bootstrap/validations/rules')(Rules);
require('./bootstrap/validations/filters')(Filters);





require('./app/router')(app);

app.listen(env('port') || 7003, function () {

    console.log('The server has started on the port: ', env('port'));
});