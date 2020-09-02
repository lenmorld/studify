import axios from 'axios'

// import config file
import config from '../config'

console.log(config)

const SERVER_URI = config.server_uri;

function doRequest(resourcePath, method = 'GET', data = null) {
	// return axios.get(`${SERVER_URI}/${resourcePath}`)

	const request = {
		method: method,
		url: SERVER_URI + resourcePath,
		headers: {
			"Content-Type": "application/json",
			// "Authorization": `Bearer ${access_token}`,
			"Accept": "application/json"
		}
	}

	if (data) {
		request.data = data
	}

	return axios(request);
}

export default {
	doRequest
}

