let express = require("express");
let app = express();
let request = require("request");

app.get("/results", function(req, res){
    request("http://www.omdbapi.com/?s=california", function(error, response, body){
        if(!error && response.statusCode === 200){
            res.send(body);
        }
    });
});

app.listen(3000, function(){
    console.log("Movie App has started");
});