const axios = require('axios');

/** Generate Data (nodes.json and edges.json) */
const API_URL = 'https://dummyjson.com/products/1';
axios.get(API_URL)
.then((response) => {
    let { data } = response;
    console.log(data);
    console.log(data.id);
})
.catch((error) => { console.log(error); });