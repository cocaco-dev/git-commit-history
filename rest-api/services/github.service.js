const axios = require('axios')
const getAuth = (token = null) => {
  if (token) {
    return {
      headers: {
        Authorization: `token ${token}`
      }
    }
  }
  return {}
}

exports.isValidUsername = async (userName) => {
  try {
    const authHeaders = getAuth()
    await axios.get(`https://api.github.com/users/${userName}`, authHeaders)
    return { isValid: true, message: '' }
  } catch (error) {
    if (error.response?.status && error.response.status === 403) {
      return { isValid: false, message: error.response.data.message }
    }
    return { isValid: false, message: 'User not found' }
  }
}

exports.getCommits = async (userId, repoName, token = null) => {
  const authHeaders = getAuth(token)
  const { data } = await axios.get(`https://api.github.com/repos/${userId}/${repoName}/commits`, authHeaders)
  return data
}

exports.isValidRepo = async (userId, repoName, token = null) => {
  try {
    const authHeaders = getAuth(token)
    await axios.get(`https://api.github.com/repos/${userId}/${repoName}`, authHeaders)
    return { isValid: true, message: '' }
  } catch (error) {
    if (error.response?.status && error.response.status === 403) {
      return { isValid: false, message: error.response.data.message }
    }
    return { isValid: false, message: `Repository ${repoName} of the user ${userId} not found` }
  }
}
