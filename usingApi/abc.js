var request = require('request');
var options = {
    'method': 'POST',
    'url': 'https://arun-express-api.herokuapp.com/user/find',
    'headers': {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({"username":"admin","password":"admin"})

};
request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
});
