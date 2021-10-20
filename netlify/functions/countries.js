const axios = require('axios')

exports.handler = async function (event, context) {
    console.log(event)
    console.log(context)
    try {
        const response = await axios.get('https://data.world/dr5hn/country-state-city/workspace/file?filename=countries.json', {
            headers: { 'authorization': `Bearer ${process.env.REACT_APP_API_KEY}` }
        })
        console.log(response.data)
        return {
            statusCode: 200,
            body: JSON.stringify(response.data)
        }
    } catch (err) {
        return {
            statusCode: 404,
            body: err.toString()
        }
    }
}