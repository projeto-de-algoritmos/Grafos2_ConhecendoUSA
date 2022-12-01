const {cities} = require('./database/states') 

function testDB(){
  var myJsonString = JSON.stringify(cities)
  console.log(myJsonString)
}

