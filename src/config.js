// init. environment variables
import dotenv from 'dotenv'
dotenv.config();

export default {
		node_env: process.env.NODE_ENV,
		port: process.env.PORT,
		server_uri: process.env.SERVER_URI
	}