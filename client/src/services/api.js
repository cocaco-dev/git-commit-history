import axios from 'axios';

// create an axios instance
const api = axios.create({
    baseURL: 'http://localhost:4000/api', // api base url

});

export const getCommitHistory = async (owner, repo) => {
    try {
        const { data } = await api.get(`/commits/${owner}/${repo}`);
        return data;
    } catch (error) {
        if (error.response?.data) {
            return { message: error.response.data.message, error: true };
        }
        return {
            message: 'something went wrong',
            error: true
        };
    }
}