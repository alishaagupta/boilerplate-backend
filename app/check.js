var body =  [
    {
        "name": "Stainless Steel Cutter Peeler Tool Pineapple Seed Clip Home Kitchen Gadgets",
        "category": "Kitchen",
        "price": 260,
        "startDate": "2017-01-30",
        "endDate": "2017-04-04"
    },
    {
        "name": "20.5cm Fruit Cutter Chef Kitchen Cutlery Knife Knives Choice - 07",
        "category": "Kitchen",
        "price": 149,
        "startDate": "2017-01-30",
        "endDate": "2020-12-04"
    },
    {
        "name": "LETV LeEco Le 2 32GB Rose Gold",
        "category": "Electronics",
        "price": 1737,
        "startDate": "2017-01-30",
        "endDate": null
    },
    {
        "name": "Nokia 1100",
        "category": "Electronics",
        "price": 999,
        "startDate": "2020-09-30",
        "endDate": null
    }
]


var count = 0;
var res_arr= {};

var curr_date = new Date();
console.log(curr_date)
for(var i=0 ; i< body.length; i++){

  if(body[i].endDate !== null){

      if(curr_date >= Date.parse(body[i].startDate) && curr_date <= Date.parse(body[i].endDate)){
          count = count + body[i].price


       
          console.log(res_arr.hasOwnProperty(body[i].category) )
          res_arr.hasOwnProperty(body[i].category) ? res_arr[body[i].category]++ : res_arr[body[i].category] = 1

           ;

      }
  }else{
      if(curr_date >= Date.parse(body[i].startDate)){
        count = count + body[i].price
        res_arr.hasOwnProperty(body[i].category) ? res_arr[body[i].category]++ :res_arr[body[i].category] = 1

      }
  }
  
}

console.log(count)