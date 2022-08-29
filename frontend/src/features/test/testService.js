import axios from 'axios'

const API_URL = '/api/clients/'

// Create new client
const createClient = async (clientData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, clientData, config)

  return response.data
}



const clientService = {
  createClient,
}

export default clientService