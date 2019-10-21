'use strict';

const User = require('../models/User');


exports.hello = function *() {


    console.log('hereeeee');
    yield this.validateBody({

    });

    if (!this.validationErrors) {
        const user = {


        };

        console.log('helloooo');
        this.result = yield User.getInstance().hello();
    } else {
        error('ValidationError');
    }
};