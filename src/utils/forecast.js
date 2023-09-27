const request = require('request')

const forecast = (latitude, longitude, units, callback) => {
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=1dd95465ce6f4060ef8c3b1e0bdc57bf&units=${units}`

    request({ url, json: true }, (error,  body ) => {
        // console.log(body.main)
        // console.log(body)
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.length === 0) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, ` It is currently  ${body.body.main.temp} degress out, but it feels like ${body.body.main.feels_like} degrees.There is a ${ body.body.main.humidity }% of humidity.`)
        }
    })
} 

module.exports = forecast