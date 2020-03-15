let express = require("express");
let app = express();
app.use(express.static("views"));

app.get("/",function(req, res){
    res.render("index.ejs");
});
// app.get("/:subpage",function(req,res){
//  let subpage =req.params.subpage;
// res.render("subpagecalling.ejs", {subpage:subpage});
// });
 app.get("/:subpage/:subsubpage",function(req,res){
    let subpage= req.params.subpage;
    let subsubpage=req.params.subsubpage;
    res.render("subsubpage.ejs",{subpage:subpage,subsubpage:subsubpage});
});
app.get("/posts", function(res, res){
    var posts =[
        { title:"Updated SNHU News", author: "ISS office"},
        { title:"New Corona News", author: "Office of SNHU Adminitration"},
        { title:"Commencement 2020", author: "Graduation Team Office"},
        { title:"Employment", author: "SNHU employment office"},
    ];
    res.render("posts.ejs", {posts:posts});
});

app.listen(3000,function(){
    console.log("Serving is listening at 3000");
});