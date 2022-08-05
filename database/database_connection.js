
const mysql = require("mysql");


var db_config=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'gpos'
});

db_config.connect(function(error)
{
    if(error){
        console.log("Error");
    }
    else{
        console.log("Connected");
    }
});

module.exports=db_config;