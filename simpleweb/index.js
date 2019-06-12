const express = require("express");

const app = express();

app.get('/', (req, res) => {
 	console.log('GET request received..');
	res.send('How are you doing ..');
});

app.listen(8080, () => {
	console.log('listening on port 8080');
});
