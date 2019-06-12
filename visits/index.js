const express = require('express');
const redis = require('redis');
const process = require('process');


const app = express();
const client = redis.createClient({
	host: 'redis-server',
	port: 6379
});

client.set('visits', 0);

//default route
app.get('/', (req, res) => {
	client.get('visits', (err, visits) => {
		res.send('Number of visits: ' + visits);
		client.set('visits', parseInt(visits) + 1);

	});
});

//crash the server - used to test auto recovery
app.get('/crash', (req, res) => {
	console.log('crashing the application for testing');
	process.exit(0);
});

app.listen(8081, () => {
	console.log('listening on port 8081');
});
