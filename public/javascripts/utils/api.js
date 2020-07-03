import axios from 'axios'

// const SERVER_URI = `http://localhost:3000`;
// const SERVER_URI = `https://3000-c47bae75-d948-4f15-a71d-c1c59dcec083.ws-us02.gitpod.io`;

const SERVER_URI = `http://localhost:3000/.netlify/functions/server`;


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

