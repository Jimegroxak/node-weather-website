import request from "postman-request"

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/search/geocode/v6/forward?q=' + encodeURIComponent(address) + '&access_token=pk.eyJ1IjoiamltZWdyb3hhayIsImEiOiJjbTVmcDA3MmsxZTduMm5wbTIzOWJlamhkIn0.I2VaQw9rV8GKW3nm1KnnRw&limit=1'

    request ({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services.')
        } else if (body.features.length === 0) {
            callback('Unable to find location. Please try another search.')
        } else {
            const {full_address} = body.features[0].properties
            const {latitude, longitude} = body.features[0].properties.coordinates
            callback(undefined, {
                latitude, longitude, full_address
            })
        }
    })
}

export default {
    geocode
}