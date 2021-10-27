import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://localhost:5001/challenge-4d30c/us-central1/api', // the api URL
})

export default instance
