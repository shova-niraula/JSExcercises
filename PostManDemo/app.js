var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
let tasks =["complete project"," practice js exercise", "make portfolio site", "learn react", "apply jobs", "get job", "buda happy :D"];

app.get("/", function(req,res){
    res.render("home");
});
app.get("/tasks",function(req,res){

    res.render("tasks", {tasks: tasks});
});
app.post("/addTasks", function(req,res){
    let newTask = req.body.newtask;
    tasks.push(newTask);
    res.redirect("/tasks");
});

app.listen("3000", function(){
    console.log("server started at 3000");
});
