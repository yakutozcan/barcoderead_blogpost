var get_ip = require('ipware')().get_ip;
var http = require('http'),
    express = require('express'),
    app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function(req, res) {
	res.send("hi!");
	var value = req.param('value');
    var ip_info = get_ip(req);
    var ip = req.headers['x-real-ip'] || req.connection.remoteAddress;
    console.log("ip: "+ip+" || value: "+value);
});
app.listen(1907, function() {
    console.log('Example app listening on port 1907!')
})
