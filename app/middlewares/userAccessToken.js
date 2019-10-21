'use strict';

module.exports = function *(next){
    // yield this.validateBody({
    //     'access_token': 'required'
    // });

    if(!this.validationErrors){
        console.log('----------------- ' + this.request.headers.access_token);
        if((yield db.queryAsync(`SELECT access_token FROM customers WHERE access_token = ? `,[this.request.headers.access_token])).length > 0){
            yield next;
        }else{
            error('AccessTokenError')
        }
    }else{
        error('ValidationError');
    }
};
