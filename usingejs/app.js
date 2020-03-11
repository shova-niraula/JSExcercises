let express = require("express");
let app = express();
app.use(express.static("views"));

app.get("/",function(req, res){
    res.render("index.ejs");
});
app.get("/:subpage",function(req,res){
 let subpage =req.params.subpage;
res.render("subpagecalling.ejs", {subpage:subpage});
});

app.listen(3000,function(){
    console.log("Serving is listening at 3000");
});