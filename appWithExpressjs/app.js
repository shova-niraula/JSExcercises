let express = require("express");
let app = express();

//"/"=> "Hi There!"
app.get("/",function(req, res){
    res.send("Hi there");
    console.log("someone has visited the home page");
});
//"/bye" =>"Goodbye"
app.get("/bye",function(req,res){
    res.send("Goodbye");
    console.log("someone has visited bye page");
});
//"/dog" =>"bhow"
app.get("/dog",function(req,res){
    res.send("bhow")
    console.log("someone has send get request to /dog");
});
//tell express to listen for request
app.listen(3000,function(){
    console.log("Server listening on port 3000");
});
// app.get('/', function (req, res) {
//     res.send('Sample endpoint ' + req.params.id);
// });
//
//
// app.post('/user/add', function (req, res) {
//     console.log(req.body)
//
//     res.send('exmaple of post with data 1 ' + req.params.id);
// });
//
//
// app.get('/posts', function (req, res) {
//     const data = [
//         {
//             id: 1,
//             name: "Shova"
//         },
//         {
//             id: 2,
//             name: "Arun"
//         },
//         {
//             id: 3,
//             name: "Nav"
//         }
//     ]
//     res.send(data);
// });
//
//
// app.listen(3000);
