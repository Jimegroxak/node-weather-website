import request from "postman-request"

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=6ed58f47e5ef74bda502e2a746019feb&query=' + long + ',' + lat + '&units=f'

    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services')
        } else if (body.error) {
            callback('Unable to find location.')
        } else {
            const {weather_descriptions: descriptions, temperature, feelslike} = body.current
            callback(undefined, descriptions[0] + '. It is currently ' + temperature + ' degrees out. It feels like ' + feelslike + ' degrees.')
        }
    })
}

export default {
    forecast
}