'use strict';

const UserController = require('../controllers/UserController'),
    accessToken = require('../middlewares/userAccessToken');


module.exports = function (app, Router) {

    const router = new Router({
        prefix: '/user'
    });


    router.post(
        '/hello',
        UserController.hello
    );

    app.use(router.routes()).use(router.allowedMethods());

} ;