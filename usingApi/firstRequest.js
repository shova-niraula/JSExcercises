let request = require('request');
request('https://jsonplaceholder.typicode.com/users/1', function(error, response, body){
    // eval(require('locus'))
if(!error && response.statusCode ==200){
    let parsedData =JSON.parse(body);
    console.log(parsedData["query"]["results"]["channel"]["astronnomy"]["sunset"]);
}

});