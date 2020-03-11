var express = require("express");
var app = express();

app.get("/",function(req,res){
   res.send("Welcome to an express app")
});
app.get("/speak/:animal",function(req,res){
    let sounds ={
        pig:"oink",
        cow:"mooh",
        dog:"bhow",
        cat:"meow"
    }
    let animal = req.params.animal.toLowerCase();
    let sound = sounds[animal];
    res.send("The " + animal + " says " + "'" +sound + "'");
});
app.get("/repeat/:message/:times",function(req,res){
    let message = req.params.message;
    let times = Number(req.params.times);
    let result ="";
    for(var i= 0; i<times; i++){
      result += message + " ";
    }
    res.send(result);
});
app.get("*",function(req,res){
    res.send("PAGE NOT FOUND");
});
app.listen(3000);
console.log("app is serving at the location 3000");