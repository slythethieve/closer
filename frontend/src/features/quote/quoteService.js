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
	
	return response.data
}


const quoteService = {
  	createQuote,
  	getQuotes,
  
}

export default quoteService