
require('dotenv').config();

const app = require('./app');
const mongoose = require('mongoose');

const server = app.listen(3000, () => {
	console.log(`Express is running on port ${server.address().port}`);
});

mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection
	.on('connected', () => {
		console.log(`Mongoose connection open on ${process.env.DATABASE}`);
	})
	.on('error', (err) => {
		console.log(`Connection error: ${err.message}`);
	});