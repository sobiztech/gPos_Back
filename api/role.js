//role
const { request } = require('express');
var express=require('express');
const res = require('express/lib/response');
var app=express();
var database_connection=require('../database/database_connection');
var port=process.env.port|| 5000;
// app.use(express.json());

//role_show all
app.get('/role',(request,response)=>{
    database_connection.query('SELECT id, role_name, description FROM role', (error,results)=>{
        if(error){
            console.log(error);
        }
        else{
            console.log(results);
            response.send(results);
        }     
    });
    database_connection.end();
});
// 
//role_show_by_id
app.get('/role/:id',(request,response)=>{
    const id=request.params.id;
    console.log(id);
    database_connection.query("SELECT id, role_name, description FROM role WHERE id='"+id+"'", (error,results)=>{
        if(error){
            console.log(error);
        }
        else{
            console.log(results);
            response.send(results);    
        }   
    });
    database_connection.end();
  
});


app.listen(port,()=>{
    console.log("Server Start");
});




