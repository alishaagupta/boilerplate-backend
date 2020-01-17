var request = require("request");

var options = { method: 'GET',
  url: 'https://http-hunt.thoughtworks-labs.net/challenge/input',
  headers: 
   { 
     'Content-Type': 'application/json',
     userId: 'Y1xB0aqs' },
  body: {},
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
  var result = body.length ;
  var count = 0;

  var res_arr= {};
  var curr_date = new Date();

  for(var i=0 ; i< body.length; i++){

    if(body[i].endDate !== null){

        if(curr_date >= Date.parse(body[i].startDate) && curr_date <= Date.parse(body[i].endDate)){
            count = count + body[i].price
        }
    }else{
        if(curr_date >= Date.parse(body[i].startDate)){
            count = count + body[i].price
        }
    }
    
  }

  var second_options = {
      method: 'POST',
      url: 'https://http-hunt.thoughtworks-labs.net/challenge/output',
      headers: 
      { 
        'Content-Type': 'application/json',
        userId: 'Y1xB0aqs' },
     body: {
         "output":  {
             "totalValue": count
         }
     },
     json: true

  }

  request(second_options, function(error,response, body){

    
    if (error) throw new Error(error);

    console.log('ohhh ', body);
  })

  
});
