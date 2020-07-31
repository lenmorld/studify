// init. environment variables
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
	node_env: process.env.NODE_ENV,
	port: process.env.PORT,
	server_uri: process.env.SERVER_URI
};