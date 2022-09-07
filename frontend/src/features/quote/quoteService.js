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

// Update, delete are still missing here. 

// Get all quotes
const getQuotes = async (token) => {
  const config = {
      headers: {
          Authorization: `Bearer ${token}`
      }
  }

  const response = await axios.get(API_URL, config)

  
  // So this is a way to get the object id of a an entry. Good stuff. 
  console.log(response.data[0]._id)
  console.log(response.data[1].products)

  return response.data
}

const quoteService = {
  createQuote,
  getQuotes
}

export default quoteService