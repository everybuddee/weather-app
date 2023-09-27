const request = require('request')

const geocode = (address, callback) => {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${address}&limit=1&appid=1dd95465ce6f4060ef8c3b1e0bdc57bf`

    request({ url, json: true }, (error,  body ) => {
        // console.log(body.body.body.body[0])
        console.log(body.body[0])
        if (error) {
            callback('Unable to connect to location services!', undefined)
         } 
        else if (body.body[0] === undefined) {
            callback('Unable to find location. Try another search.', undefined)
        } 
        else {
            callback(undefined, {
                latitude: body.body[0].lat,
                longitude: body.body[0].lon,
                location: body.body[0].name
            }
            )
        }
       
    })
}

module.exports = geocode