import axios from 'axios'

const API_URL = '/api/quotes/'

// Create new quote
const createQuote = async (quoteData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, quoteData, config)

  return response.data
}

// Update, delete and possibly get are still missing here. 



const quoteService = {
  createQuote,
}

export default quoteService