import axios from "axios"

// import config file
import config from "../config"

// console.log(config)

const SERVER_URI = config.server_uri

async function doRequest(resourcePath, method = "GET", data = null) {
  // return axios.get(`${SERVER_URI}/${resourcePath}`)

  const request = {
    method,
    url: SERVER_URI + resourcePath,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data,
  }

  const result = await axios(request)

//   debugger
  return result.data
}

export default {
  doRequest,
}
