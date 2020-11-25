const fetch = require('node-fetch');


const getPeople = async (fetchAPI = fetch) => {
    const getRequest = await fetchAPI('https://swapi.py4e.com/api/people/');
    const data = await getRequest.json();

    return {
        count: data.count,
        results: data.results
    };
};


module.exports = getPeople;