const axios = require('axios').default;

async function get(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (err) {
        const { response: { statusText, status } } = err;
        throw new Error(statusText);
    }

}

module.exports = { get };
