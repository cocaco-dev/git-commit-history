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

export const getUserById = async (token = null, userId) => {
  const authHeaders = getAuth(token)
  const { data } = await axios.get(`https://api.github.com/users/${userId}`, authHeaders)
  console.log('🚀 ~ file: github.service.js ~ line 17 ~ getUserById ~ data', data)
  return data
}

export const getCommits = async (token = null, userId, repoName) => {
  const authHeaders = getAuth(token)
  const { data } = await axios.get(`https://api.github.com/repos/${userId}/${repoName}/commits`, authHeaders)
  console.log('🚀 ~ file: github.service.js ~ line 23 ~ getCommits ~ data', data)
  return data
}
