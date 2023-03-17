//jshint esversion:6

const express = require("express");

const app = express();


app.get("/",function(req,res){
	res.send("<h1>Hello World!</h1>");
});

app.get("/contact",function(req,res){
	res.send("My contact is Hyderali321@gmail.com");
});

app.get("/about",function(req,res){
	res.send("I will finish Angila's course on 26th march");
});


app.listen(3002, function(){
	console.log("server started on port 3002");
});

