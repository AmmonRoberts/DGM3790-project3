const axios = require('axios')

exports.handler = async function (event, context) {
    console.log(event)
    console.log(context)
    try {
        const response = await axios.get('https://api.data.world/v0/file_download/leftie457/countries/countries.json', {
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